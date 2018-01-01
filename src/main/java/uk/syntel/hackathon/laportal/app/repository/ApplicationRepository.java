package uk.syntel.hackathon.laportal.app.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import uk.syntel.hackathon.laportal.app.beans.Application;

@Repository
public interface ApplicationRepository extends CrudRepository<Application, Long> {

}
