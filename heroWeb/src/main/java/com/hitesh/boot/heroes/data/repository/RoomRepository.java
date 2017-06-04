/**
 * 
 */
package com.hitesh.boot.heroes.data.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hitesh.boot.heroes.data.entity.Room;

/**
 * @author hitjoshi
 *
 */
@Repository
public interface RoomRepository extends CrudRepository<Room, Long>{
    Room findByNumber(String number);
}
