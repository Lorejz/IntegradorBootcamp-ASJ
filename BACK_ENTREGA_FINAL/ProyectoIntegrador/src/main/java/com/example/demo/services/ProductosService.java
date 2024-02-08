package com.example.demo.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.request.ProductoFormDTO;
import com.example.demo.dto.response.ProductosListDTO;
import com.example.demo.models.CategoriasModel;
import com.example.demo.models.ProductosModel;
import com.example.demo.models.ProveedoresModel;
import com.example.demo.repositories.CategoriasRepository;
import com.example.demo.repositories.ProductosRepository;
import com.example.demo.repositories.ProveedoresRepository;

@Service
public class ProductosService {
	
	@Autowired
	ProductosRepository productosRepository;
	
	@Autowired
	private ProveedoresRepository proveedoresService;
	
	@Autowired
	private CategoriasRepository categoriasRepository;
	
	// POST
	public String crearProducto (ProductoFormDTO productoDTO) {
        ProductosModel nuevoProducto = new ProductosModel();
        
        nuevoProducto.setSkuProducto(productoDTO.getSkuProducto());
        nuevoProducto.setNombreProducto(productoDTO.getNombreProducto());
        nuevoProducto.setPrecioProducto(productoDTO.getPrecioProducto());
        nuevoProducto.setImagenProducto(productoDTO.getImagenProducto());
        nuevoProducto.setDescProducto(productoDTO.getDescProducto());

        Optional<CategoriasModel> categoria = categoriasRepository.findById(productoDTO.getIdCategoria());
        nuevoProducto.setCategoria(categoria.get());

        Optional<ProveedoresModel> proveedor = proveedoresService.findById(productoDTO.getIdProveedor());
        nuevoProducto.setProveedor(proveedor.get());

        nuevoProducto.setCreatedAt(new Date());
        nuevoProducto.setIsHabilitadoProducto(true);

        productosRepository.save(nuevoProducto);
        
		return "producto creado con exito";
	}
	
	
	// GET ALL activos
	public List<ProductosListDTO> buscarProductosActivos(){
		List<ProductosModel> productos = productosRepository.findAll();
		List<ProductosListDTO> productosListDTO = new ArrayList<>();
		
		for( ProductosModel producto : productos ) {
			if(producto.getIsHabilitadoProducto() == true) {
				ProductosListDTO prodDTO = new ProductosListDTO();
				
				prodDTO.setIdProducto(producto.getIdProducto());
				prodDTO.setImagenProducto(producto.getImagenProducto());
				prodDTO.setSkuProducto(producto.getSkuProducto());
				prodDTO.setNombreProducto(producto.getNombreProducto());
				prodDTO.setHabilitado(producto.getIsHabilitadoProducto());
				
				Optional<CategoriasModel> categoria = categoriasRepository.findById(producto.getCategoria().getIdCategoria());
				
				prodDTO.setNombreCategoria(categoria.get().getNombreCategoria());
				prodDTO.setPrecioProducto(producto.getPrecioProducto());
				
				Optional<ProveedoresModel> proveedor = proveedoresService.findById(producto.getProveedor().getIdProveedor());
				
				prodDTO.setRazonSocialProvProducto(proveedor.get().getRazonSocialProveedor());
				
				productosListDTO.add(prodDTO);
			}
		}

		return productosListDTO;
	}
	
	// GET ALL baja
	public List<ProductosListDTO> buscarProductosEliminados(){
		List<ProductosModel> productos = productosRepository.findAll();
		List<ProductosListDTO> productosListDTO = new ArrayList<>();
		
		for( ProductosModel producto : productos ) {
			if(producto.getIsHabilitadoProducto() == false) {
				ProductosListDTO prodDTO = new ProductosListDTO();
				
				prodDTO.setIdProducto(producto.getIdProducto());
				prodDTO.setImagenProducto(producto.getImagenProducto());
				prodDTO.setSkuProducto(producto.getSkuProducto());
				prodDTO.setNombreProducto(producto.getNombreProducto());
				prodDTO.setHabilitado(producto.getIsHabilitadoProducto());

				
				Optional<CategoriasModel> categoria = categoriasRepository.findById(producto.getCategoria().getIdCategoria());
				
				prodDTO.setNombreCategoria(categoria.get().getNombreCategoria());
				prodDTO.setPrecioProducto(producto.getPrecioProducto());
				
				Optional<ProveedoresModel> proveedor = proveedoresService.findById(producto.getProveedor().getIdProveedor());
				
				prodDTO.setRazonSocialProvProducto(proveedor.get().getRazonSocialProveedor());
				
				productosListDTO.add(prodDTO);
			}
		}

		return productosListDTO;
	}
		
	// GET PRODUCTO by ID
	public ProductoFormDTO buscarProductoById ( int id ) {
		ProductosModel producto = productosRepository.findById(id).get();
		ProductoFormDTO prodDTO = new ProductoFormDTO();
		
		prodDTO.setSkuProducto(producto.getSkuProducto());
		prodDTO.setIdCategoria(producto.getCategoria().getIdCategoria());
		prodDTO.setIdProveedor(producto.getProveedor().getIdProveedor());
		prodDTO.setNombreProducto(producto.getNombreProducto());
		prodDTO.setImagenProducto(producto.getImagenProducto());
		prodDTO.setDescProducto(producto.getDescProducto());
		prodDTO.setPrecioProducto(producto.getPrecioProducto());
		
		return prodDTO;
		
	}
	
	
	// GET PRODUCTOs by CATEGORIA
	public List<ProductosListDTO> buscarProductosByCategoria( int idCategoria ){
		List<ProductosModel> productos = productosRepository.findAll();
		List<ProductosListDTO> productosListDTO = new ArrayList<>();
		
		for( ProductosModel producto : productos ) {
			if(producto.getCategoria().getIdCategoria() == idCategoria && producto.getIsHabilitadoProducto() == true) {
				ProductosListDTO prodDTO = new ProductosListDTO();
				
				prodDTO.setIdProducto(producto.getIdProducto());
				prodDTO.setImagenProducto(producto.getImagenProducto());
				prodDTO.setSkuProducto(producto.getSkuProducto());
				prodDTO.setNombreProducto(producto.getNombreProducto());
				prodDTO.setHabilitado(producto.getIsHabilitadoProducto());

				
				Optional<CategoriasModel> categoria = categoriasRepository.findById(producto.getCategoria().getIdCategoria());
				
				prodDTO.setNombreCategoria(categoria.get().getNombreCategoria());
				prodDTO.setPrecioProducto(producto.getPrecioProducto());
				
				Optional<ProveedoresModel> proveedor = proveedoresService.findById(producto.getProveedor().getIdProveedor());
				
				prodDTO.setRazonSocialProvProducto(proveedor.get().getRazonSocialProveedor());
				
				productosListDTO.add(prodDTO);
			}
		}

		return productosListDTO;
	}
	// GET PRODUCTOS by PROVEEDOR
	public List<ProductosListDTO> buscarProductosByProveedor(int idProveedor){
		List<ProductosModel> productos = productosRepository.findAll();
		List<ProductosListDTO> productosListDTO = new ArrayList<>();
		
		for( ProductosModel producto : productos ) {
			if ( producto.getProveedor().getIdProveedor() == idProveedor && producto.getIsHabilitadoProducto() == true ) {
				ProductosListDTO prodDTO = new ProductosListDTO();
				
				prodDTO.setIdProducto(producto.getIdProducto());
				prodDTO.setImagenProducto(producto.getImagenProducto());
				prodDTO.setSkuProducto(producto.getSkuProducto());
				prodDTO.setNombreProducto(producto.getNombreProducto());
				prodDTO.setHabilitado(producto.getIsHabilitadoProducto());

				
				Optional<CategoriasModel> categoria = categoriasRepository.findById(producto.getCategoria().getIdCategoria());
				
				prodDTO.setNombreCategoria(categoria.get().getNombreCategoria());
				prodDTO.setPrecioProducto(producto.getPrecioProducto());
				
				Optional<ProveedoresModel> proveedor = proveedoresService.findById(producto.getProveedor().getIdProveedor());
				
				prodDTO.setRazonSocialProvProducto(proveedor.get().getRazonSocialProveedor());
				
				productosListDTO.add(prodDTO);
			}
		}
		
		return productosListDTO;
	}
	
	// PUT
	public String actualizarProducto(int idProducto, ProductoFormDTO productoDTO) {
	    Optional<ProductosModel> productoOptional = productosRepository.findById(idProducto);

	    if (productoOptional.isPresent()) {
	        ProductosModel productoExistente = productoOptional.get();

	        productoExistente.setSkuProducto(productoDTO.getSkuProducto());
	        productoExistente.setNombreProducto(productoDTO.getNombreProducto());
	        productoExistente.setPrecioProducto(productoDTO.getPrecioProducto());
	        productoExistente.setImagenProducto(productoDTO.getImagenProducto());
	        productoExistente.setDescProducto(productoDTO.getDescProducto());

	        Optional<CategoriasModel> categoria = categoriasRepository.findById(productoDTO.getIdCategoria());
	        productoExistente.setCategoria(categoria.orElse(null));

	        Optional<ProveedoresModel> proveedor = proveedoresService.findById(productoDTO.getIdProveedor());
	        productoExistente.setProveedor(proveedor.orElse(null));

	        productoExistente.setUpdatedAt(new Date());

	        productosRepository.save(productoExistente);

	        return "Producto actualizado con éxito";
	    } else {
	        return "No se encontró el producto con el ID proporcionado";
	    }
	}
		
	// DELETE LOGICO
	public String bajaProducto (int id) {
	    Optional<ProductosModel> productoOptional = productosRepository.findById(id);
	    if (productoOptional.isPresent()) {
	        ProductosModel productoExistente = productoOptional.get();
	        
	        productoExistente.setIsHabilitadoProducto(false);
	        productoExistente.setDeletedAt(new Date());
	        
	        productosRepository.save(productoExistente);
	        
	        return "producto dado de baja con exito";
	    }else {
	    	return "no se encontro el producto";
	    }
	    
	}
	
	// ALTA LOGICA
	public String altaProducto(int id) {
	    Optional<ProductosModel> productoOptional = productosRepository.findById(id);

	    if (productoOptional.isPresent()) {
	        ProductosModel productoExistente = productoOptional.get();

	        productoExistente.setIsHabilitadoProducto(true);
	        productoExistente.setDeletedAt(null); // Puedes establecer deletedAt a null si es necesario
	        productoExistente.setUpdatedAt(new Date());

	        productosRepository.save(productoExistente);

	        return "Producto dado de alta con éxito";
	    } else {
	        return "No se encontró el producto";
	    }
	}
	
	
	// verificar SKU
	public boolean verificarProductoBySKU(String skuProducto) {
	    ProductosModel producto = productosRepository.findBySkuProducto(skuProducto);
	    
	    if (producto != null) {
	        return true;
	    } else {
	        return false;
	    }
	}
	
	
	public long buscarCantidadProductosActivosHome () {
		return this.productosRepository.countByIsHabilitadoProductoTrue();
	}
}
