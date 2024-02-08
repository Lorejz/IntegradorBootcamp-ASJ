package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.request.ProveedorCreateDTO;
import com.example.demo.dto.response.ProveedorVistaDetalleDTO;
import com.example.demo.dto.response.ProveedoresListDTO;
import com.example.demo.services.ProveedoresService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class ProveedoresController {	
	
	@Autowired
	ProveedoresService proveedoresService;
	
	
	@GetMapping("/proveedores/activos") // PROVEEDORES PARA LISTADO
	public ResponseEntity<List<ProveedoresListDTO>> getProveedoresActivos(){
		return ResponseEntity.ok(proveedoresService.buscarProveedoresActivos());
	}
	
	@GetMapping("/proveedores/eliminados") // PROVEEDORES PARA LISTADO
	public ResponseEntity<List<ProveedoresListDTO>> getProveedoresEliminados(){
		return ResponseEntity.ok(proveedoresService.buscarProveedoresEliminados());
	}
	
	@GetMapping("proveedores/{id}") // USADO PARA COMPLETAR CAMPOS DEL FORM
	public ResponseEntity<ProveedorCreateDTO> getProveedoresById(@PathVariable int id){
		return ResponseEntity.ok( proveedoresService.buscarProveedorByIdParaForm(id) );
	}
	
	@GetMapping("proveedores/detalle/{id}") // USADO PARA COMPLETAR CAMPOS DEL FORM
	public ResponseEntity<ProveedorVistaDetalleDTO> getProveedoresByIdDetalle(@PathVariable int id){
		return ResponseEntity.ok( proveedoresService.getProveedorParaDetalle(id) );
	}
	
	@PostMapping("/proveedores")
	public String createProveedor(@RequestBody ProveedorCreateDTO dtoProveedor) {
		proveedoresService.crearProveedor(dtoProveedor);
		return "proveedor creado con exito";
	}
	
	@PutMapping("/proveedores/{id}")
	public String modifyProveedor(@PathVariable int id, @RequestBody ProveedorCreateDTO prov  ){
		return  proveedoresService.modificarProveedor(id, prov);
	}
	
	@DeleteMapping("/proveedores/{id}")
	public String bajaProveedor(@PathVariable int id) {
		return proveedoresService.bajaProveedor(id);
	}
	
	@PutMapping("/proveedores/alta/{id}")
	public String darAltaProveedor(@PathVariable int id) {
		return proveedoresService.altaProveedor(id);
	}
	
	@GetMapping("/proveedores/verificar/{codigoProveedor}")
	public ResponseEntity<Boolean> verificarCodigoProveedor(@PathVariable String codigoProveedor) {
		System.out.println( proveedoresService.buscarProveedorByCodigoProveedor(codigoProveedor) );
	    return ResponseEntity.ok(proveedoresService.buscarProveedorByCodigoProveedor(codigoProveedor));
	}
	
	@GetMapping("proveedores/cant") // cantidad de proveedores activos
	public ResponseEntity<Long> getCantProvHome(){
		return ResponseEntity.ok( proveedoresService.buscarCantidadProveedoresActivosHome() );
	}
	
}
