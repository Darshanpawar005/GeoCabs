package gfg;
/*
 * File to return first page of application
 */
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/maps")
public class ApiController {
   
	
    //private final User1Repository userRepo;
	@Autowired
	DataSource data;  
	Connection connection;
	Statement query; 
	//ResultSet record;
	List<UserEntity> userPlaces = new ArrayList<>();
	
       int counter=0;
	  public ApiController(User1Repository userRepo) {
	    //this.userRepo = userRepo;
	  }
	
	//return map.html file with UserEntity Object
	@GetMapping
	public String get(Model model) throws SQLException {
		
		if(counter<1) {
		connection = data.getConnection();
		  
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username;
		if (principal instanceof UserDetails) {
		   username = ((UserDetails)principal).getUsername();
		
		
		  query = connection.createStatement();
		  String line = "Create table if not exists "+username+" ( place varchar(255), lat varchar(255), lng varchar(255))";
		  query.executeUpdate(line);
		
		} else {
		   username = principal.toString();
		}
		}
		counter++;
		userPlaces.clear();
		model.addAttribute("entity", new UserEntity());
	    return "map";
	}
	
	//Save locations of users to database and redirect to same file.
	@PostMapping
	public String post(@ModelAttribute("entity") UserEntity entity, Model model) throws SQLException {
		
		String position = entity.getPlace();
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

		if (principal instanceof UserDetails) {
		  String username = ((UserDetails)principal).getUsername();
		
		SimpleJdbcInsert jdbc = new SimpleJdbcInsert(data).withTableName(username);
		Map<String,Object> jdbcParam = new HashMap<String,Object>();
		jdbcParam.put("place", position);
		jdbcParam.put("lat", entity.lat);
		jdbcParam.put("lng", entity.lng);
		jdbc.execute(jdbcParam);
				
		} else {
		  String username = principal.toString();
		}
		
	return "redirect:/maps";
}
	
	
	@PostMapping("/maps-2")
	public String redirect() {
		
		return "redirect:/maps2";
}
	
	@PostMapping("/BookOla")
	public String bookOla() {
		return "redirect:/getOla";
	}
	
}
