package com.example.demo.dto.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ProveedoresListDTO {
	
	private String logoProveedor;
	private int idProveedor;
	private String codigoProveedor;
	private String razonSocialProveedor;
	private boolean isHabilitadoProveedor;
	
	private String sitioWebProveedor;
	private String emailProveedor;
	private String telefonoProveedor;
	
	private String nombreContacto;
	private String apellidoContacto;
	
	private String nombrePais;
	private String nombreProvincia;
	
	public ProveedoresListDTO() {

	}
	
	public ProveedoresListDTO(String logoProveedor, int idProveedor, String razonSocialProveedor,
			String sitioWebProveedor, String emailProveedor, String telefonoProveedor, String nombreContacto,
			String apellidoContacto, String codigoProveedor, boolean isHabilitadoProveedor) {
		
		this.logoProveedor = logoProveedor;
		this.idProveedor = idProveedor;
		this.razonSocialProveedor = razonSocialProveedor;
		this.sitioWebProveedor = sitioWebProveedor;
		this.emailProveedor = emailProveedor;
		this.telefonoProveedor = telefonoProveedor;
		this.nombreContacto = nombreContacto;
		this.apellidoContacto = apellidoContacto;
		this.codigoProveedor = codigoProveedor;
		this.isHabilitadoProveedor = isHabilitadoProveedor;
	}
	public String getLogoProveedor() {
		return logoProveedor;
	}
	public void setLogoProveedor(String logoProveedor) {
		this.logoProveedor = logoProveedor;
	}
	public int getIdProveedor() {
		return idProveedor;
	}
	public void setIdProveedor(int idProveedor) {
		this.idProveedor = idProveedor;
	}
	public String getRazonSocialProveedor() {
		return razonSocialProveedor;
	}
	public void setRazonSocialProveedor(String razonSocialProveedor) {
		this.razonSocialProveedor = razonSocialProveedor;
	}
	public String getSitioWebProveedor() {
		return sitioWebProveedor;
	}
	public void setSitioWebProveedor(String sitioWebProveedor) {
		this.sitioWebProveedor = sitioWebProveedor;
	}
	public String getEmailProveedor() {
		return emailProveedor;
	}
	public void setEmailProveedor(String emailProveedor) {
		this.emailProveedor = emailProveedor;
	}
	public String getTelefonoProveedor() {
		return telefonoProveedor;
	}
	public void setTelefonoProveedor(String telefonoProveedor) {
		this.telefonoProveedor = telefonoProveedor;
	}
	public String getNombreContacto() {
		return nombreContacto;
	}
	public void setNombreContacto(String nombreContacto) {
		this.nombreContacto = nombreContacto;
	}
	public String getApellidoContacto() {
		return apellidoContacto;
	}
	public void setApellidoContacto(String apellidoContacto) {
		this.apellidoContacto = apellidoContacto;
	}

	public String getCodigoProveedor() {
		return codigoProveedor;
	}

	public void setCodigoProveedor(String codigoProveedor) {
		this.codigoProveedor = codigoProveedor;
	}

	public boolean isHabilitadoProveedor() {
		return isHabilitadoProveedor;
	}

	public void setHabilitadoProveedor(boolean isHabilitadoProveedor) {
		this.isHabilitadoProveedor = isHabilitadoProveedor;
	}

	public String getNombrePais() {
		return nombrePais;
	}

	public void setNombrePais(String nombrePais) {
		this.nombrePais = nombrePais;
	}

	public String getNombreProvincia() {
		return nombreProvincia;
	}

	public void setNombreProvincia(String nombreProvincia) {
		this.nombreProvincia = nombreProvincia;
	}
	
}
