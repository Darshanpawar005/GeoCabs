package gfg;
/*
 * Retrieval of database data
 */
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class DataTemplate implements DataRepository {

	@Autowired
	 private JdbcTemplate jdbc;
	
	@Autowired
	 public DataTemplate(JdbcTemplate jdbc) {
	 this.jdbc = jdbc;
	 }
	
	public DataTemplate() {
		
	}
	
	
		
		
		@Override
		public Iterable<OlaPlaces> findAll() {
			
			Datasource data = new Datasource();
			this.jdbc.setDataSource(data.getDataSource());
		 return jdbc.query("select * from hhh",
		 this::mapRowToIngredient);
		}      
		
		private OlaPlaces mapRowToIngredient(ResultSet rs, int rowNum)
				 throws SQLException {
				 return new OlaPlaces(
				 rs.getString("PicAdd"),
				 rs.getString("DesAdd"));
				 
				}
  
 
	
}
