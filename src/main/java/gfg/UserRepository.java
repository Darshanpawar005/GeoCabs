package gfg;
/*
 * Repository to access User's Authentication information.
 */
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
 User findByUsername(String username);
}