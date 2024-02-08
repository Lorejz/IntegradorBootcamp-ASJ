package com.example.demo.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ProveedorCreateDTO {
	
	private int idRubro;
	private int idCondicionIva;
	
	private String codigoProveedor;
	private String razonSocialProveedor;
	private String sitioWebProveedor;
	private String telefonoProveedor;
	private String cuitProveedor;
	private String logoProveedor;
	private String emailProveedor;
	
	private String nombreContacto;
	private String apellidoContacto;
	private String telefonoContacto;
	private String emailContacto;
	private String rolContacto;
	
	private int idProvincia;
	private int idPais;
	private String calleDireccion;
	private int numDireccion;
	private int codPostaDireccion;
    private String localidadDireccion;
    
    
	public ProveedorCreateDTO(int idRubro, int idCondicionIva, String razonSocialProveedor, String sitioWebProveedor,
			String telefonoProveedor, String cuitProveedor, String logoProveedor, String nombreContacto,
			String apellidoContacto, String telefonoContacto, String emailContacto, String rolContacto, int idProvincia,
			String calleDireccion, int numDireccion, int codPostaDireccion, String localidadDireccion, String codigoProveedor) {
		super();
		this.idRubro = idRubro;
		this.idCondicionIva = idCondicionIva;
		this.razonSocialProveedor = razonSocialProveedor;
		this.sitioWebProveedor = sitioWebProveedor;
		this.telefonoProveedor = telefonoProveedor;
		this.cuitProveedor = cuitProveedor;
		this.logoProveedor = logoProveedor;
		this.nombreContacto = nombreContacto;
		this.apellidoContacto = apellidoContacto;
		this.telefonoContacto = telefonoContacto;
		this.emailContacto = emailContacto;
		this.rolContacto = rolContacto;
		this.idProvincia = idProvincia;
		this.calleDireccion = calleDireccion;
		this.numDireccion = numDireccion;
		this.codPostaDireccion = codPostaDireccion;
		this.localidadDireccion = localidadDireccion;
		this.codigoProveedor = codigoProveedor;
	}
	
	public ProveedorCreateDTO() {
		
	}
	
	public int getIdRubro() {
		return idRubro;
	}
	public void setIdRubro(int idRubro) {
		this.idRubro = idRubro;
	}
	public int getIdCondicionIva() {
		return idCondicionIva;
	}
	public void setIdCondicionIva(int idCondicionIva) {
		this.idCondicionIva = idCondicionIva;
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
	public String getTelefonoProveedor() {
		return telefonoProveedor;
	}
	public void setTelefonoProveedor(String telefonoProveedor) {
		this.telefonoProveedor = telefonoProveedor;
	}
	public String getCuitProveedor() {
		return cuitProveedor;
	}
	public void setCuitProveedor(String cuitProveedor) {
		this.cuitProveedor = cuitProveedor;
	}
	public String getLogoProveedor() {
		return logoProveedor;
	}
	public void setLogoProveedor(String logoProveedor) {
		this.logoProveedor = logoProveedor;
	}
	public String getNombreContacto() {
		return nombreContacto;
	}
	public void setNombreContacto(String nombre_contacto) {
		this.nombreContacto = nombre_contacto;
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
	public int getIdProvincia() {
		return idProvincia;
	}
	public void setIdProvincia(int idProvincia) {
		this.idProvincia = idProvincia;
	}
	public String getCalleDireccion() {
		return calleDireccion;
	}
	public void setCalleDireccion(String calleDireccion) {
		this.calleDireccion = calleDireccion;
	}
	public int getNumDireccion() {
		return numDireccion;
	}
	public void setNumDireccion(int numDireccion) {
		this.numDireccion = numDireccion;
	}
	public int getCodPostaDireccion() {
		return codPostaDireccion;
	}
	public void setCodPostaDireccion(int codPostaDireccion) {
		this.codPostaDireccion = codPostaDireccion;
	}
	public String getLocalidadDireccion() {
		return localidadDireccion;
	}
	public void setLocalidadDireccion(String localidadDireccion) {
		this.localidadDireccion = localidadDireccion;
	}
	public int getIdPais() {
		return idPais;
	}
	public void setIdPais(int idPais) {
		this.idPais = idPais;
	}
	public String getEmailProveedor() {
		return emailProveedor;
	}
	public void setEmailProveedor(String emailProveedor) {
		this.emailProveedor = emailProveedor;
	}
	public String getCodigoProveedor() {
		return codigoProveedor;
	}
	public void setCodigoProveedor(String codigoProveedor) {
		this.codigoProveedor = codigoProveedor;
	}
    
}
