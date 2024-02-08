package com.example.demo.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.request.ProveedorCreateDTO;
import com.example.demo.dto.response.ProveedorVistaDetalleDTO;
import com.example.demo.dto.response.ProveedoresListDTO;
import com.example.demo.models.CondicionIvaModel;
import com.example.demo.models.DireccionModel;
import com.example.demo.models.ProveedoresModel;
import com.example.demo.models.ProvinciasModel;
import com.example.demo.models.RubrosModel;
import com.example.demo.repositories.CondicionIvaRepository;
import com.example.demo.repositories.DireccionRepository;
import com.example.demo.repositories.ProveedoresRepository;
import com.example.demo.repositories.ProvinciasRepository;
import com.example.demo.repositories.RubrosRepository;

@Service
public class ProveedoresService {

	@Autowired
	ProveedoresRepository proveedoresRepository;

	@Autowired
	private RubrosRepository rubrosRepository;

	@Autowired
	private CondicionIvaRepository condicionIvaRepository;

	@Autowired
	private DireccionRepository direccionRepository;

	@Autowired
	private ProvinciasRepository provinciasRepository;

	// POST
	public String crearProveedor(ProveedorCreateDTO proveedorDTO) {

		Optional<RubrosModel> rubro = rubrosRepository.findById(proveedorDTO.getIdRubro());
		Optional<CondicionIvaModel> condicionIva = condicionIvaRepository.findById(proveedorDTO.getIdCondicionIva());

		DireccionModel direccion = new DireccionModel();

		Optional<ProvinciasModel> provincia = provinciasRepository.findById(proveedorDTO.getIdProvincia());

		direccion.setProvincia(provincia.get());

		direccion.setCalleDireccion(proveedorDTO.getCalleDireccion());
		direccion.setNumDireccion(proveedorDTO.getNumDireccion());
		direccion.setCodPostaDireccion(proveedorDTO.getCodPostaDireccion());
		direccion.setLocalidadDireccion(proveedorDTO.getLocalidadDireccion());

		direccionRepository.save(direccion);

		ProveedoresModel newProveedor = new ProveedoresModel();

		newProveedor.setRubro(rubro.get());
		newProveedor.setCondicionIva(condicionIva.get());
		newProveedor.setDireccion(direccion);
		newProveedor.setCodigoProveedor(proveedorDTO.getCodigoProveedor());
		newProveedor.setRazonSocialProveedor(proveedorDTO.getRazonSocialProveedor());
		newProveedor.setSitioWebProveedor(proveedorDTO.getSitioWebProveedor());
		newProveedor.setTelefonoProveedor(proveedorDTO.getTelefonoProveedor());
		newProveedor.setCuitProveedor(proveedorDTO.getCuitProveedor());
		newProveedor.setLogoProveedor(proveedorDTO.getLogoProveedor());
		newProveedor.setEmailProveedor(proveedorDTO.getEmailProveedor());
		newProveedor.setNombreContacto(proveedorDTO.getNombreContacto());
		newProveedor.setApellidoContacto(proveedorDTO.getApellidoContacto());
		newProveedor.setTelefonoContacto(proveedorDTO.getTelefonoContacto());
		newProveedor.setEmailContacto(proveedorDTO.getEmailContacto());
		newProveedor.setRolContacto(proveedorDTO.getRolContacto());
		newProveedor.setHabilitadoProveedor(true);
		newProveedor.setCreatedAt(new Date());

		proveedoresRepository.save(newProveedor);

		return "Proveedor creado con exito";
	}

	// GET PROVEEDORES PARA LIST ACTIVOS
	public List<ProveedoresListDTO> buscarProveedoresActivos() {
		List<ProveedoresModel> proveedores = proveedoresRepository.findAll();

		List<ProveedoresListDTO> proveedoresDTO = new ArrayList<>();

		for (ProveedoresModel proveedor : proveedores) {
			if (proveedor.isHabilitadoProveedor() == true) {
				ProveedoresListDTO dto = new ProveedoresListDTO();
				
				dto.setCodigoProveedor(proveedor.getCodigoProveedor());  
				dto.setIdProveedor(proveedor.getIdProveedor());
				dto.setRazonSocialProveedor(proveedor.getRazonSocialProveedor());
				dto.setSitioWebProveedor(proveedor.getSitioWebProveedor());
				dto.setEmailProveedor(proveedor.getEmailProveedor());
				dto.setTelefonoProveedor(proveedor.getTelefonoProveedor());
				dto.setNombreContacto(proveedor.getNombreContacto());
				dto.setApellidoContacto(proveedor.getApellidoContacto());
				dto.setLogoProveedor(proveedor.getLogoProveedor());
				dto.setHabilitadoProveedor(proveedor.isHabilitadoProveedor());
				dto.setNombrePais(proveedor.getDireccion().getProvincia().getPais().getNombrePais());
				dto.setNombreProvincia(proveedor.getDireccion().getProvincia().getNombreProvincia());

				proveedoresDTO.add(dto);
			}
		}

		return proveedoresDTO;
	}
	
	//GET PROVEEDORES PARA LIST ELIMINADOS
	public List<ProveedoresListDTO> buscarProveedoresEliminados() {
		List<ProveedoresModel> proveedores = proveedoresRepository.findAll();

		List<ProveedoresListDTO> proveedoresDTO = new ArrayList<>();

		for (ProveedoresModel proveedor : proveedores) {
			if (proveedor.isHabilitadoProveedor() == false) {
				ProveedoresListDTO dto = new ProveedoresListDTO();
				
				dto.setCodigoProveedor(proveedor.getCodigoProveedor());  
				dto.setIdProveedor(proveedor.getIdProveedor());
				dto.setRazonSocialProveedor(proveedor.getRazonSocialProveedor());
				dto.setSitioWebProveedor(proveedor.getSitioWebProveedor());
				dto.setEmailProveedor(proveedor.getEmailProveedor());
				dto.setTelefonoProveedor(proveedor.getTelefonoProveedor());
				dto.setNombreContacto(proveedor.getNombreContacto());
				dto.setApellidoContacto(proveedor.getApellidoContacto());
				dto.setLogoProveedor(proveedor.getLogoProveedor());
				dto.setHabilitadoProveedor(proveedor.isHabilitadoProveedor());
				dto.setNombrePais(proveedor.getDireccion().getProvincia().getPais().getNombrePais());
				dto.setNombreProvincia(proveedor.getDireccion().getProvincia().getNombreProvincia());

				proveedoresDTO.add(dto);
			}
		}

		return proveedoresDTO;
	}

	// GET PROV By Id
	public ProveedorCreateDTO buscarProveedorByIdParaForm(int id) {

		Optional<ProveedoresModel> proveedorOpt = proveedoresRepository.findById(id);
		if (proveedorOpt.isPresent()) {
			ProveedoresModel proveedorExist = proveedorOpt.get();
			ProveedorCreateDTO proveedorDTO = new ProveedorCreateDTO();

			proveedorDTO.setIdRubro(proveedorExist.getRubro().getIdRubro());
			proveedorDTO.setIdCondicionIva(proveedorExist.getCondicionIva().getIdCondicionIva());
			
			proveedorDTO.setCodigoProveedor(proveedorExist.getCodigoProveedor());
			proveedorDTO.setRazonSocialProveedor(proveedorExist.getRazonSocialProveedor());
			proveedorDTO.setSitioWebProveedor(proveedorExist.getSitioWebProveedor());
			proveedorDTO.setTelefonoProveedor(proveedorExist.getTelefonoProveedor());
			proveedorDTO.setCuitProveedor(proveedorExist.getCuitProveedor());
			proveedorDTO.setLogoProveedor(proveedorExist.getLogoProveedor());
			proveedorDTO.setEmailProveedor(proveedorExist.getEmailProveedor());

			proveedorDTO.setNombreContacto(proveedorExist.getNombreContacto());
			proveedorDTO.setApellidoContacto(proveedorExist.getApellidoContacto());
			proveedorDTO.setTelefonoContacto(proveedorExist.getTelefonoContacto());
			proveedorDTO.setEmailContacto(proveedorExist.getEmailContacto());
			proveedorDTO.setRolContacto(proveedorExist.getRolContacto());

			proveedorDTO.setIdProvincia(proveedorExist.getDireccion().getProvincia().getIdProvincia());
			proveedorDTO.setIdPais(proveedorExist.getDireccion().getProvincia().getPais().getIdPais());
			proveedorDTO.setCalleDireccion(proveedorExist.getDireccion().getCalleDireccion());
			proveedorDTO.setNumDireccion(proveedorExist.getDireccion().getNumDireccion());
			proveedorDTO.setCodPostaDireccion(proveedorExist.getDireccion().getCodPostaDireccion());
			proveedorDTO.setLocalidadDireccion(proveedorExist.getDireccion().getLocalidadDireccion());

			return proveedorDTO;
		} else {
			return null;
		}

	}

	// PUT
	public String modificarProveedor(int id, ProveedorCreateDTO provDTO) {
		Optional<ProveedoresModel> proveedorOptional = proveedoresRepository.findById(id);
		if (proveedorOptional.isPresent()) {
			ProveedoresModel provMod = proveedorOptional.get();

			Optional<RubrosModel> rubro = rubrosRepository.findById(provDTO.getIdRubro());
			Optional<CondicionIvaModel> condicionIva = condicionIvaRepository.findById(provDTO.getIdCondicionIva());

			provMod.setRubro(rubro.get());
			provMod.setCondicionIva(condicionIva.get());
			
			provMod.setCodigoProveedor(provDTO.getCodigoProveedor());
			provMod.setRazonSocialProveedor(provDTO.getRazonSocialProveedor());
			provMod.setSitioWebProveedor(provDTO.getSitioWebProveedor());
			provMod.setTelefonoProveedor(provDTO.getTelefonoProveedor());
			provMod.setCuitProveedor(provDTO.getCuitProveedor());
			provMod.setLogoProveedor(provDTO.getLogoProveedor());
			provMod.setEmailProveedor(provDTO.getEmailProveedor());

			provMod.setNombreContacto(provDTO.getNombreContacto());
			provMod.setApellidoContacto(provDTO.getApellidoContacto());
			provMod.setTelefonoContacto(provDTO.getTelefonoContacto());
			provMod.setEmailContacto(provDTO.getEmailContacto());
			provMod.setRolContacto(provDTO.getRolContacto());
			provMod.setUpdatedAt(new Date());

			DireccionModel direccion = provMod.getDireccion();
			direccion.setCalleDireccion(provDTO.getCalleDireccion());
			direccion.setNumDireccion(provDTO.getNumDireccion());
			direccion.setCodPostaDireccion(provDTO.getCodPostaDireccion());
			direccion.setLocalidadDireccion(provDTO.getLocalidadDireccion());

			Optional<ProvinciasModel> provincia = provinciasRepository.findById(provDTO.getIdProvincia());
			direccion.setProvincia(provincia.get());

			direccionRepository.save(direccion);

			proveedoresRepository.save(provMod);

			return "Proveedor modificado correctamente";
		} else {
			return "Proveedor no encontrado";
		}

	}

	// DELETE LOGICO
	public String bajaProveedor(int id) {

		Optional<ProveedoresModel> prov = proveedoresRepository.findById(id);
		if (prov.isPresent()) {
			ProveedoresModel provDelete = prov.get();

			provDelete.setDeletedAt(new Date());
			provDelete.setHabilitadoProveedor(false);

			proveedoresRepository.save(provDelete);
			
			return "proveedor dado de baja";
		}else {
			return "error no existe";
		}
	}
	
	// ALTA LOGICA
	
	public String altaProveedor(int id) {
		
		Optional<ProveedoresModel> prov = proveedoresRepository.findById(id);
		if (prov.isPresent()) {
			ProveedoresModel provAlta = prov.get();

			provAlta.setDeletedAt(null);
			provAlta.setHabilitadoProveedor(true);
			provAlta.setUpdatedAt(new Date());

			proveedoresRepository.save(provAlta);
			
			return "proveedor dado de alta";
		}else {
			return "error no existe";
		}
	}
	
	
	
	public ProveedorVistaDetalleDTO getProveedorParaDetalle(int id) {
	    Optional<ProveedoresModel> prov = proveedoresRepository.findById(id);

	    if (prov.isPresent()) {
	        ProveedoresModel proveedor = prov.get();
	        ProveedorVistaDetalleDTO provDTO = new ProveedorVistaDetalleDTO();

	        provDTO.setLogoProveedor(proveedor.getLogoProveedor());
	        provDTO.setRazonSocialProveedor(proveedor.getRazonSocialProveedor());
	        provDTO.setCodigoProveedor(proveedor.getCodigoProveedor());
	        provDTO.setNombreRubro(proveedor.getRubro().getNombreRubro());
	        provDTO.setSitioWebProveedor(proveedor.getSitioWebProveedor());
	        provDTO.setTelefonoProveedor(proveedor.getTelefonoProveedor());
	        provDTO.setEmailProveedor(proveedor.getEmailProveedor());
	        provDTO.setCuitProveedor(proveedor.getCuitProveedor());
	        provDTO.setNombreCondicionIva(proveedor.getCondicionIva().getNombreCondicionIva());
	        provDTO.setNombreContacto(proveedor.getNombreContacto());
	        provDTO.setApellidoContacto(proveedor.getApellidoContacto());
	        provDTO.setTelefonoContacto(proveedor.getTelefonoContacto());
	        provDTO.setEmailContacto(proveedor.getEmailContacto());
	        provDTO.setRolContacto(proveedor.getRolContacto());
	        provDTO.setNombrePais(proveedor.getDireccion().getProvincia().getPais().getNombrePais());
	        provDTO.setNombreProvincia(proveedor.getDireccion().getProvincia().getNombreProvincia());
	        provDTO.setNumDireccion(proveedor.getDireccion().getNumDireccion());
	        provDTO.setCodPostalDireccion(proveedor.getDireccion().getCodPostaDireccion());
	        provDTO.setLocalidadDireccion(proveedor.getDireccion().getLocalidadDireccion());
	        provDTO.setCalleDireccion(proveedor.getDireccion().getCalleDireccion());
	        
	        if(proveedor.isHabilitadoProveedor() == true) {
	        	provDTO.setEstadoProveedor("Activo");
	        }else {
	        	provDTO.setEstadoProveedor("Eliminado");

	        }
	      
	        return provDTO;
	    } else {
	        return null;
	    }
	}
	
	
	public boolean buscarProveedorByCodigoProveedor(String codigoProveedor) {
	    ProveedoresModel proveedor = proveedoresRepository.findByCodigoProveedor(codigoProveedor);
	    
	    if (proveedor != null) {
	        return true;
	    } else {
	        return false;
	    }
	}
	
	public long buscarCantidadProveedoresActivosHome () {
		return this.proveedoresRepository.countByIsHabilitadoProveedorTrue();
	}
	

}
