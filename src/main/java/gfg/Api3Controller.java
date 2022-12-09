package gfg;

/*
 * File to select location and redirect to Ola Website
 */
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/getOla")
public class Api3Controller {
   

	@Autowired
	DataSource data; 
	Connection connection; 
	Statement query; 
	ResultSet record;
	int counter=0;
	List<UserEntity> pickupList = new ArrayList<>();
	List<UserEntity> destinationList = new ArrayList<>();

	  public Api3Controller() {
	   
	  }
	
	  //return Ola,html file
	@GetMapping
	public String get(Model model) throws SQLException {
			
		pickupList.clear();
		destinationList.clear();
		
		destinationList.add(0,new UserEntity("Destination","0","0"));
		pickupList.add(0,new UserEntity("PickUp","0","0"));
		
		  if(counter<1) {
			  connection = data.getConnection();
		  }
		  
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
		
		 String line = "Select * from "+username;
		 record = query.executeQuery(line); 
		
		 while(record.next()) {
		  
			 String place = record.getString(1);
			 String lat = record.getString(2);
		     String lng = record.getString(3);
			 
			UserEntity ui = new UserEntity(place,lat,lng); 
			pickupList.add(ui);
			 //ll.add(new UserEntity(rs.getString(1),rs.getString(2),rs.getString(3)));
		 } 
		 //System.out.println(ll);
		 Iterator<UserEntity> i = pickupList.listIterator(1);
		 UserEntity ui;
		 while(i.hasNext()) {
			 ui=i.next();
			 destinationList.add(ui);
		 }  
		  counter++;
		 model.addAttribute("entity", new UserEntity());
		 model.addAttribute("add", new OlaPlaces());
		 model.addAttribute("places",pickupList); 
		 model.addAttribute("places1",destinationList); 
		
		return "Ola";
	}
	
	
	//Redirect to ola with selected user places details
	@PostMapping("/bookOla")
	public String post(@ModelAttribute("add") OlaPlaces entity, Model model) throws SQLException {
		String Pick=entity.getPicAdd();
		String Drop=entity.getDesAdd(); 
		
		//UserEntity ui;
		UserEntity u1 = null,u2 = null;
		
		
		String one = null,two = null;
		String three = null,four = null;
		Iterator<UserEntity> i = pickupList.listIterator(); 
		while(i.hasNext()) {
			UserEntity ui = i.next();
			if(ui.place.equalsIgnoreCase(Pick)) {
				one=ui.lat;
				two=ui.lng;
				
			}
			
			if(ui.place.equalsIgnoreCase(Drop)) {
				three=ui.lat;
				four=ui.lng;
				
			}
			
			
		}
		
		return "redirect:http://book.olacabs.com/?lat="+one+
				"&lng="+two+
				"&category=compact&utm_source=12343&drop_lat="+three+
				"&drop_lng="+four+
				"&dsw=yes";
		
	}
	
}
	
