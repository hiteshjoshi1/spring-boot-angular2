/**
 * 
 */
package com.hitesh.boot.heroes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hitesh.boot.heroes.data.repository.GuestRepository;
import com.hitesh.boot.heroes.data.repository.ReservationRepository;
import com.hitesh.boot.heroes.data.repository.RoomRepository;

/**
 * @author hitjoshi
 *
 */
@Service
public class ReservationService {
	private RoomRepository roomRepository;
	private GuestRepository guestRepository;
	private ReservationRepository reservationRepository;

	@Autowired
	public ReservationService(RoomRepository roomRepository, GuestRepository guestRepository,
			ReservationRepository reservationRepository) {
		this.roomRepository = roomRepository;
		this.guestRepository = guestRepository;
		this.reservationRepository = reservationRepository;
	}
}
