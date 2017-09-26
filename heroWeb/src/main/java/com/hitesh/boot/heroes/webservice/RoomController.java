package com.hitesh.boot.heroes.webservice;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hitesh.boot.heroes.data.entity.Room;
import com.hitesh.boot.heroes.data.repository.RoomRepository;
@RestController
public class RoomController {
    @Autowired
    private RoomRepository repository;

    @RequestMapping(value="/rooms", method= RequestMethod.GET, produces = "application/json")
    List<Room> findAll(@RequestParam(required=false) String roomNumber){
    	System.out.println("HItesh Joshi --------------------------------->  "+roomNumber);
       List<Room> rooms = new ArrayList<>();
        if(null==roomNumber){
            Iterable<Room> results = this.repository.findAll();
            results.forEach(room-> {rooms.add(room);});
        }else{
            Room room = this.repository.findByNumber(roomNumber);
            if(null!=room) {
            	System.out.println(room);
                rooms.add(room);
            }
        }
        return rooms;
    }
}
