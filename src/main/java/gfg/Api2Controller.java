package gfg;
/*
 * @Darshan Pawar
 * File to search place and save
 */
import java.util.HashMap;
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
@RequestMapping("/maps2")
public class Api2Controller {
   
	 
	  @Autowired
		DataSource data;
	  public Api2Controller() {
		    
		  }
	
	//return map2.html file
	@GetMapping
	public String get(Model model) {
		
		model.addAttribute("entity", new UserEntity());
		return "map2";
	}
	
	//save latitude and longitude from map2.html file
	@PostMapping
	public String post(@ModelAttribute("entity") UserEntity entity, Model model) {
		
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

		if (principal instanceof UserDetails) {
		  String username = ((UserDetails)principal).getUsername();
		
		SimpleJdbcInsert jdbc = new SimpleJdbcInsert(data).withTableName(username);
		Map<String,Object> jdbcParam = new HashMap<String,Object>();
		jdbcParam.put("place", entity.place);
		jdbcParam.put("lat", entity.lat);
		jdbcParam.put("lng", entity.lng);
		jdbc.execute(jdbcParam);
		
		} else {
		  String username = principal.toString();
		}
		
		return "redirect:/maps2";
	}
	
	
	@PostMapping("/BookOla")
	public String bookOla() {
		return "redirect:/getOla";
	}
	
	
}
