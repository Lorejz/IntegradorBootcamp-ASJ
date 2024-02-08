package com.example.demo.services;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.request.OrdenCreateDTO;
import com.example.demo.dto.request.OrdenDetalleCreateDTO;
import com.example.demo.dto.response.DetallesOrdenVistaDTO;
import com.example.demo.dto.response.OrdenListDTO;
import com.example.demo.dto.response.OrdenVistaDetalleDTO;
import com.example.demo.models.EstadosOrdenModel;
import com.example.demo.models.OrdenDetalleModel;
import com.example.demo.models.OrdenModel;
import com.example.demo.models.ProductosModel;
import com.example.demo.models.ProveedoresModel;
import com.example.demo.repositories.EstadosOrdenRepository;
import com.example.demo.repositories.OrdenDetalleRepository;
import com.example.demo.repositories.OrdenRepository;
import com.example.demo.repositories.ProductosRepository;
import com.example.demo.repositories.ProveedoresRepository;

@Service
public class OrdenService {
	
	@Autowired
	OrdenRepository ordenRepository;
	
	@Autowired
	OrdenDetalleRepository ordenDetalleRepository;
	
	@Autowired
	ProveedoresRepository proveedoresRepository;
	
	@Autowired
	ProductosRepository productosRepository;
	
	@Autowired
	EstadosOrdenRepository estadosOrdenRepository;
	
	public Integer obtenerSiguienteNumeroOrden(int idProveedor) {
	    return ordenRepository.obtenerSiguienteNumeroOrden();
	}
	
	public String crearOrden( OrdenCreateDTO ordenCab, List<OrdenDetalleCreateDTO> ordenDetalles ) {
		
		OrdenModel orden = new OrdenModel();
		
		Optional<ProveedoresModel> proveedor = proveedoresRepository.findById(ordenCab.getIdProveedor());
		Optional<EstadosOrdenModel> estado = estadosOrdenRepository.findById(1);
		
		if(proveedor.isPresent()) {
			orden.setProveedor(proveedor.get());
		}else {
	        throw new NoSuchElementException("Proveedor no encontrado con ID: " + ordenCab.getIdProveedor() );
		}
		
		if(estado.isPresent()) {
			orden.setEstadoOrden(estado.get());
		}else {
	        throw new NoSuchElementException("estado no encontrado");
		}
		orden.setNumeroOrden(ordenCab.getNumeroOrden());
		orden.setFechaEmisionOrden(ordenCab.getFechaEmisionOrden());
		orden.setFechaEntregaOrden(ordenCab.getFechaEntregaOrden());
		orden.setInfoOrden(ordenCab.getInfoOrden());
		orden.setMontoTotalOrden(ordenCab.getMontoTotalOrden());
		orden.setCreatedAt(new Date());
		
		ordenRepository.save(orden);
		
		for ( OrdenDetalleCreateDTO  detalle : ordenDetalles  ) {
			OrdenDetalleModel renglon = new OrdenDetalleModel();
			
			Optional<ProductosModel> prod = productosRepository.findById(detalle.getIdProducto());
			
			renglon.setProducto(prod.get());
			renglon.setOrden(orden);
			renglon.setCantOrdenDetalle(detalle.getCantOrdenDetalle());
			renglon.setPrecioUniOrdenDetalle(detalle.getPrecioUniOrdenDetalle());
			
			ordenDetalleRepository.save(renglon);
			
		}
		
		return "Orden y detalles creados";
	}
	
    public List<OrdenListDTO> buscarListadoOrdenesActivas() {
        List<OrdenModel> ordenes = ordenRepository.findAll();
        List<OrdenListDTO> ordenesListDTO = new ArrayList<>();
        DecimalFormat formato = new DecimalFormat("#.##");

        for (OrdenModel orden : ordenes) {
        	if(orden.getEstadoOrden().getIdEstado() == 1) {
                OrdenListDTO ordenDTO = new OrdenListDTO();

                ordenDTO.setNumeroOrden(orden.getNumeroOrden());
                ordenDTO.setRazonSocialProveedor(orden.getProveedor().getRazonSocialProveedor());
                ordenDTO.setFechaEmisionOrden(orden.getFechaEmisionOrden());
                ordenDTO.setFechaEntregaOrden(orden.getFechaEntregaOrden());

                String montoTotalString = formato.format(orden.getMontoTotalOrden());
                montoTotalString = montoTotalString.replace(",", "."); // Reemplazar coma por punto
                double montoTotalRedondeado = Double.parseDouble(montoTotalString);
                ordenDTO.setMontoTotalOrden(montoTotalRedondeado);

                ordenDTO.setNombreEstado(orden.getEstadoOrden().getNombreEstado());
                ordenDTO.setIdOrden(orden.getIdOrden());

                ordenesListDTO.add(ordenDTO);
        	}
        }

        return ordenesListDTO;
    }
	
    public List<OrdenListDTO> buscarListadoOrdenesCanceladas() {
        List<OrdenModel> ordenes = ordenRepository.findAll();
        List<OrdenListDTO> ordenesListDTO = new ArrayList<>();
        DecimalFormat formato = new DecimalFormat("#.##");

        for (OrdenModel orden : ordenes) {
        	if(orden.getEstadoOrden().getIdEstado() == 2) {
                OrdenListDTO ordenDTO = new OrdenListDTO();

                ordenDTO.setNumeroOrden(orden.getNumeroOrden());
                ordenDTO.setRazonSocialProveedor(orden.getProveedor().getRazonSocialProveedor());
                ordenDTO.setFechaEmisionOrden(orden.getFechaEmisionOrden());
                ordenDTO.setFechaEntregaOrden(orden.getFechaEntregaOrden());

                String montoTotalString = formato.format(orden.getMontoTotalOrden());
                montoTotalString = montoTotalString.replace(",", "."); // Reemplazar coma por punto
                double montoTotalRedondeado = Double.parseDouble(montoTotalString);
                ordenDTO.setMontoTotalOrden(montoTotalRedondeado);

                ordenDTO.setNombreEstado(orden.getEstadoOrden().getNombreEstado());
                ordenDTO.setIdOrden(orden.getIdOrden());

                ordenesListDTO.add(ordenDTO);
        	}
        }

        return ordenesListDTO;
    }
    
    public OrdenVistaDetalleDTO buscarOrdenPorId(int ordenId) {
        
        Optional<OrdenModel> ordenOptional = ordenRepository.findById(ordenId);
        
        if (ordenOptional.isPresent()) {
            OrdenModel orden = ordenOptional.get();
            
            OrdenVistaDetalleDTO ordenCabDTO = new OrdenVistaDetalleDTO();
            
            ordenCabDTO.setNumeroOrden(orden.getNumeroOrden());
            ordenCabDTO.setFechaEmisionOrden(orden.getFechaEmisionOrden());
            ordenCabDTO.setFechaEntregaOrden(orden.getFechaEntregaOrden());
            ordenCabDTO.setLogoProveedor(orden.getProveedor().getLogoProveedor());
            ordenCabDTO.setRazonSocialProveedor(orden.getProveedor().getRazonSocialProveedor());
            ordenCabDTO.setMontoTotalOrden(orden.getMontoTotalOrden());
            ordenCabDTO.setNombreEstado(orden.getEstadoOrden().getNombreEstado());
            ordenCabDTO.setInfoOrden(orden.getInfoOrden());
            
            List<OrdenDetalleModel> detalles = ordenDetalleRepository.findAllByOrdenId(ordenId);
            
            List<DetallesOrdenVistaDTO> detallesDTO = new ArrayList<>();
            
            for (OrdenDetalleModel detalle : detalles) {
                
                DetallesOrdenVistaDTO detDTO = new DetallesOrdenVistaDTO();
                
                detDTO.setNombreProducto(detalle.getProducto().getNombreProducto());
                detDTO.setCantidad(detalle.getCantOrdenDetalle());
                detDTO.setPrecioUnitario(detalle.getPrecioUniOrdenDetalle());
                detDTO.setSubTotal(detalle.getCantOrdenDetalle() * detalle.getPrecioUniOrdenDetalle());
                
                detallesDTO.add(detDTO);
            }
            
            ordenCabDTO.setOrdenDetalles(detallesDTO);
            
            return ordenCabDTO;
        } else {
            return null;
        }
    }
    
    public String cancelarOrden(int id) {
    	
      Optional<OrdenModel> ordenOptional = ordenRepository.findById(id);
        
        if (ordenOptional.isPresent()) {
            OrdenModel orden = ordenOptional.get();
            
            Optional<EstadosOrdenModel> estado = estadosOrdenRepository.findById(2);

            orden.setEstadoOrden(estado.get());
            
            ordenRepository.save(orden);
            
            return "modificada correctamente";
        }else {
        	return "no se encontro orden";
        }
        
    }
    
    
	public long buscarCantidadOrdenessActivasHome () {
		return this.ordenRepository.countByEstadoOrdenIdEstadoActivo();
		
	}
    
    
    
	
	
	
	
}

