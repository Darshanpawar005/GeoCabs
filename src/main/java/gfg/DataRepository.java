package gfg;
/*
 * Repository to access database places
 */
public interface DataRepository {
	 Iterable<OlaPlaces> findAll();
	}