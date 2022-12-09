package gfg;
/*
 * Repository to perform CRUD operations on database
 */
import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface User1Repository extends CrudRepository<UserEntity,Long>{
	List<UserEntity> findAll();
	UserEntity findById(long id);
}
