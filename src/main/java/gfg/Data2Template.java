package gfg;

import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
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
@RequestMapping("/o")
public class Data2Template {
   
	
    private final User1Repository repo;
	@Autowired
	//@Scope(value="session")
	
	DataSource data;
	//@Autowired
	//JdbcTemplate jdbc;

	  public Data2Template(User1Repository repo) {
	    this.repo = repo;
	  }
	
	@GetMapping
	public boolean get() throws SQLException {
		return data.getConnection().isClosed();
	}
	
}