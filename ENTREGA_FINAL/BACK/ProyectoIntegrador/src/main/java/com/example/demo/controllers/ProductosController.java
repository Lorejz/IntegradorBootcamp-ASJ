package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.request.ProductoFormDTO;
import com.example.demo.dto.response.ProductosListDTO;
import com.example.demo.services.ProductosService;

@RestController
public class ProductosController {
	
	@Autowired
	ProductosService productosService;
	
	@PostMapping("/productos")
	public ResponseEntity<String> postProducto(@RequestBody ProductoFormDTO productoDTO) {
		return ResponseEntity.ok( productosService.crearProducto(productoDTO) );
	}
	
	@GetMapping("/productos/activos")
	public ResponseEntity<List<ProductosListDTO>> getProductosActivos() {
		return ResponseEntity.ok( productosService.buscarProductosActivos() );
	}
	
	@GetMapping("/productos/eliminados")
	public ResponseEntity<List<ProductosListDTO>> getProductosEliminados() {
		return ResponseEntity.ok( productosService.buscarProductosEliminados() );
	}
	
	@GetMapping("/productos/{id}")
	public ResponseEntity<ProductoFormDTO> getProductoById(@PathVariable int id) {
		return ResponseEntity.ok( productosService.buscarProductoById(id) );
	}
	
	
	@GetMapping("/productos/categorias/{id}")
	public ResponseEntity<List<ProductosListDTO>> getProductosByCategoria(@PathVariable int id) {
		return ResponseEntity.ok( productosService.buscarProductosByCategoria(id) );
	}
	
	
	@GetMapping("/productos/categorias/eli/{id}")
	public ResponseEntity<List<ProductosListDTO>> buscarProductosByCategoriaEliminados(@PathVariable int id) {
		return ResponseEntity.ok( productosService.buscarProductosByCategoriaEliminados(id) );
	}
	
	@GetMapping("/productos/proveedor/{id}")
	public ResponseEntity<List<ProductosListDTO>> getProductosByProveedor(@PathVariable int id) {
		return ResponseEntity.ok( productosService.buscarProductosByProveedor(id) );
	}
	
	@PutMapping("/productos/{id}")
	public ResponseEntity<String> putProducto (@PathVariable int id, @RequestBody ProductoFormDTO productoDTO) {
		return ResponseEntity.ok( productosService.actualizarProducto(id, productoDTO) );
	}
	
	@DeleteMapping("/productos/{id}")
	public ResponseEntity<String> deleteProducto (@PathVariable int id) {
		return ResponseEntity.ok( productosService.bajaProducto(id) );

	}
	
	@PutMapping("/productos/alta/{id}")
	public ResponseEntity<String> altaProducto (@PathVariable int id) {
		return ResponseEntity.ok( productosService.altaProducto(id) );

	}
	
	@GetMapping("/productos/verificar/{skuProducto}")
	public ResponseEntity<Boolean> verificarSKUProducto(@PathVariable String skuProducto) {
	    return ResponseEntity.ok(productosService.verificarProductoBySKU(skuProducto) );
	}
	
	
	@GetMapping("productos/cant") // cantidad de productos activos
	public ResponseEntity<Long> getCantProvHome(){
		return ResponseEntity.ok( productosService.buscarCantidadProductosActivosHome() );
	}
	
}
