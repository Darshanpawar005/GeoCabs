package gfg;
/*
 * Object used to save and retrieve Places saved by user.
 */
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@NoArgsConstructor(access=AccessLevel.PACKAGE, force=true)
@RequiredArgsConstructor
@Entity
public class UserEntity {
	
    
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	final Long id;
	String place;
	String lat;
	String lng;
	
UserEntity(String place,String lat, String lng){
	this.id=0l;
	 this.place=place;
	 this.lat=lat;
	 this.lng=lng;
	}
}
