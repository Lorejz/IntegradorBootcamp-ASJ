package com.example.demo.models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;


@Entity
@Table(name="Proveedores")
public class ProveedoresModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idProveedor;
	
    @ManyToOne( fetch = FetchType.EAGER )
    @JoinColumn(name = "idRubro") //nombre columna 
    private RubrosModel rubro;     //entidad
    
    @ManyToOne( fetch = FetchType.EAGER )
    @JoinColumn(name = "idCondicionIva")
    private CondicionIvaModel condicionIva;
    
    @OneToOne( fetch = FetchType.EAGER )
    @JoinColumn(name = "idDireccion")
    private DireccionModel direccion;
	
    @Column(unique = true )
    private String codigoProveedor;
    
    @Column(name= "razonSocialProveedor",length = 70, unique = true)
	private String razonSocialProveedor;

    @Column(length = 200)
	private String sitioWebProveedor;

    @Column(length = 20)
	private String telefonoProveedor;

    @Column(length = 20)
	private String cuitProveedor;

    @Column(length = 255)
	private String logoProveedor;
    
    @Column()
    private String emailProveedor;
    
    @Column()
	private String nombreContacto;
	
    @Column()
	private String apellidoContacto;
	
    @Column()
	private String telefonoContacto;
	
    @Column()
	private String emailContacto;
	
    @Column()
	private String rolContacto;

    @Column()
	private boolean isHabilitadoProveedor;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;

    @Column(nullable = true)
    @Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;

    @Column(nullable = true)
    @Temporal(TemporalType.TIMESTAMP)
    private Date deletedAt;

	public ProveedoresModel(int idProveedor, RubrosModel rubro, CondicionIvaModel condicionIva,
			DireccionModel direccion, String razonSocialProveedor, String sitioWebProveedor, String telefonoProveedor,
			String cuitProveedor, String logoProveedor, boolean isHabilitadoProveedor, Date createdAt, Date updatedAt,
			Date deletedAt) {
		
		this.idProveedor = idProveedor;
		this.rubro = rubro;
		this.condicionIva = condicionIva;
		this.direccion = direccion;
		this.razonSocialProveedor = razonSocialProveedor;
		this.sitioWebProveedor = sitioWebProveedor;
		this.telefonoProveedor = telefonoProveedor;
		this.cuitProveedor = cuitProveedor;
		this.logoProveedor = logoProveedor;
		this.isHabilitadoProveedor = isHabilitadoProveedor;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.deletedAt = deletedAt;
		
	}

    public ProveedoresModel() {
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

	public int getIdProveedor() {
		return idProveedor;
	}

	public void setIdProveedor(int idProveedor) {
		this.idProveedor = idProveedor;
	}

	public RubrosModel getRubro() {
		return rubro;
	}

	public void setRubro(RubrosModel rubro) {
		this.rubro = rubro;
	}

	public CondicionIvaModel getCondicionIva() {
		return condicionIva;
	}

	public void setCondicionIva(CondicionIvaModel condicionIva) {
		this.condicionIva = condicionIva;
	}

	public DireccionModel getDireccion() {
		return direccion;
	}

	public void setDireccion(DireccionModel direccion) {
		this.direccion = direccion;
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

	
	public String getEmailProveedor() {
		return emailProveedor;
	}

	public void setEmailProveedor(String emailProveedor) {
		this.emailProveedor = emailProveedor;
	}

	public boolean isHabilitadoProveedor() {
		return isHabilitadoProveedor;
	}

	public void setHabilitadoProveedor(boolean isHabilitadoProveedor) {
		this.isHabilitadoProveedor = isHabilitadoProveedor;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public Date getDeletedAt() {
		return deletedAt;
	}

	public void setDeletedAt(Date deletedAt) {
		this.deletedAt = deletedAt;
	}

	public String getCodigoProveedor() {
		return codigoProveedor;
	}

	public void setCodigoProveedor(String codigoProveedor) {
		this.codigoProveedor = codigoProveedor;
	}
    
    
}
