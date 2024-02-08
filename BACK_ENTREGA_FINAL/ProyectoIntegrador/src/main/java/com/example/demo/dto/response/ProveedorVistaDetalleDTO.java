package com.example.demo.dto.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ProveedorVistaDetalleDTO {
	
	private String logoProveedor;
	private String razonSocialProveedor;
    private String codigoProveedor;
    private String estadoProveedor;
    private String nombreRubro;
	private String sitioWebProveedor;
	private String telefonoProveedor;
    private String emailProveedor;
	private String cuitProveedor;
	private String nombreCondicionIva;
	private String nombreContacto;
	private String apellidoContacto;
	private String telefonoContacto;
	private String emailContacto;
	private String rolContacto;
	private String nombrePais;
	private String nombreProvincia;
	private int numDireccion;
	private int codPostalDireccion;
    private String localidadDireccion;
	private String calleDireccion;

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

	public int getNumDireccion() {
		return numDireccion;
	}

	public void setNumDireccion(int numDireccion) {
		this.numDireccion = numDireccion;
	}

	public int getCodPostalDireccion() {
		return codPostalDireccion;
	}

	public void setCodPostalDireccion(int codPostalDireccion) {
		this.codPostalDireccion = codPostalDireccion;
	}

	public String getLocalidadDireccion() {
		return localidadDireccion;
	}

	public void setLocalidadDireccion(String localidadDireccion) {
		this.localidadDireccion = localidadDireccion;
	}

	public String getCalleDireccion() {
		return calleDireccion;
	}

	public void setCalleDireccion(String calleDireccion) {
		this.calleDireccion = calleDireccion;
	}

	public ProveedorVistaDetalleDTO() {
	}
	
	public String getLogoProveedor() {
		return logoProveedor;
	}
	public void setLogoProveedor(String logoProveedor) {
		this.logoProveedor = logoProveedor;
	}
	public String getRazonSocialProveedor() {
		return razonSocialProveedor;
	}
	public void setRazonSocialProveedor(String razonSocialProveedor) {
		this.razonSocialProveedor = razonSocialProveedor;
	}
	public String getCodigoProveedor() {
		return codigoProveedor;
	}
	public void setCodigoProveedor(String codigoProveedor) {
		this.codigoProveedor = codigoProveedor;
	}
	public String getEstadoProveedor() {
		return estadoProveedor;
	}
	public void setEstadoProveedor(String estadoProveedor) {
		this.estadoProveedor = estadoProveedor;
	}
	public String getNombreRubro() {
		return nombreRubro;
	}
	public void setNombreRubro(String nombreRubro) {
		this.nombreRubro = nombreRubro;
	}
	public String getSitioWebProveedor() {
		return sitioWebProveedor;
	}
	public void setSitioWebProveedor(String sitioWebProveedor) {
		this.sitioWebProveedor = sitioWebProveedor;
	}
	public String getTelefonoProveedor() {
		return telefonoProveedor;
	}
	public void setTelefonoProveedor(String telefonoProveedor) {
		this.telefonoProveedor = telefonoProveedor;
	}
	public String getEmailProveedor() {
		return emailProveedor;
	}
	public void setEmailProveedor(String emailProveedor) {
		this.emailProveedor = emailProveedor;
	}
	public String getCuitProveedor() {
		return cuitProveedor;
	}
	public void setCuitProveedor(String cuitProveedor) {
		this.cuitProveedor = cuitProveedor;
	}
	public String getNombreCondicionIva() {
		return nombreCondicionIva;
	}
	public void setNombreCondicionIva(String nombreCondicionIva) {
		this.nombreCondicionIva = nombreCondicionIva;
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
	public String getTelefonoContacto() {
		return telefonoContacto;
	}
	public void setTelefonoContacto(String telefonoContacto) {
		this.telefonoContacto = telefonoContacto;
	}
	public String getEmailContacto() {
		return emailContacto;
	}
	public void setEmailContacto(String emailContacto) {
		this.emailContacto = emailContacto;
	}
	public String getRolContacto() {
		return rolContacto;
	}
	public void setRolContacto(String rolContacto) {
		this.rolContacto = rolContacto;
	}
	
	
}
