/**
 * 
 */
package com.hitesh.boot.heroes.webservice;

import java.io.IOException;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author hitjoshi
 * Sample to show how to do a file download with Spring Boot and Angular
 */
@RestController
public class DownloadPDFController {
	// don't use cross orgin in actual App
	@CrossOrigin
	@RequestMapping(value = "/file", method = RequestMethod.GET, produces = "application/pdf")
	public ResponseEntity<InputStreamResource> downloadPdfFile(@RequestParam("data") String itemId) throws IOException {
		ClassPathResource pdfFile = new ClassPathResource("test.pdf");
		
		HttpHeaders headers = new HttpHeaders();
	    headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
	    headers.add("Pragma", "no-cache");
	    headers.add("Expires", "0");		

		return ResponseEntity.ok().headers(headers).contentLength(pdfFile.contentLength())
				.contentType(MediaType.parseMediaType("application/pdf"))
				.body(new InputStreamResource(pdfFile.getInputStream()));

	}

}