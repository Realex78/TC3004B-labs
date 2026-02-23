import React, { useState } from 'react';
import './StudentForm.css';

const FIELDS = [
    { name: 'matricula', label: 'Matrícula', placeholder: 'A01234567', icon: '🆔', type: 'text' },
    { name: 'nombre', label: 'Nombre', placeholder: 'Juan', icon: '👤', type: 'text' },
    { name: 'apellidos', label: 'Apellidos', placeholder: 'Pérez López', icon: '👥', type: 'text' },
    { name: 'edad', label: 'Edad', placeholder: '21', icon: '🎂', type: 'number' },
    { name: 'universidad', label: 'Universidad', placeholder: 'Tecnológico de Monterrey', icon: '🏛️', type: 'text' },
    { name: 'carrera', label: 'Carrera', placeholder: 'Ingeniería en Software', icon: '🎓', type: 'text' },
];

const StudentForm = () => {
    const [submitted, setSubmitted] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {};
        const inputs = e.target.elements;
        for (const input of inputs) {
            if (input.type === 'submit') continue;
            formData[input.name] = input.value;
        }
        setSubmitted(formData);
    };

    return (
        <div className="student-form-wrapper">
            <div className="student-form-container">
                {/* ---- Form Card ---- */}
                <div className="student-form-card">
                    <div className="student-form-header">
                        <div className="icon-circle">🎓</div>
                        <h2>Registro Estudiantil</h2>
                        <p>Completa tus datos para continuar</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="student-form-fields">
                            {/* Matrícula — full width */}
                            <div className="student-form-group">
                                <label htmlFor="matricula">{FIELDS[0].label}</label>
                                <input
                                    id="matricula"
                                    name="matricula"
                                    type="text"
                                    placeholder={FIELDS[0].placeholder}
                                    required
                                />
                            </div>

                            {/* Nombre + Apellidos row */}
                            <div className="student-form-row">
                                <div className="student-form-group">
                                    <label htmlFor="nombre">{FIELDS[1].label}</label>
                                    <input
                                        id="nombre"
                                        name="nombre"
                                        type="text"
                                        placeholder={FIELDS[1].placeholder}
                                        required
                                    />
                                </div>
                                <div className="student-form-group">
                                    <label htmlFor="apellidos">{FIELDS[2].label}</label>
                                    <input
                                        id="apellidos"
                                        name="apellidos"
                                        type="text"
                                        placeholder={FIELDS[2].placeholder}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Edad — full width */}
                            <div className="student-form-group">
                                <label htmlFor="edad">{FIELDS[3].label}</label>
                                <input
                                    id="edad"
                                    name="edad"
                                    type="number"
                                    placeholder={FIELDS[3].placeholder}
                                    min="1"
                                    max="120"
                                    required
                                />
                            </div>

                            {/* Universidad + Carrera row */}
                            <div className="student-form-row">
                                <div className="student-form-group">
                                    <label htmlFor="universidad">{FIELDS[4].label}</label>
                                    <input
                                        id="universidad"
                                        name="universidad"
                                        type="text"
                                        placeholder={FIELDS[4].placeholder}
                                        required
                                    />
                                </div>
                                <div className="student-form-group">
                                    <label htmlFor="carrera">{FIELDS[5].label}</label>
                                    <input
                                        id="carrera"
                                        name="carrera"
                                        type="text"
                                        placeholder={FIELDS[5].placeholder}
                                        required
                                    />
                                </div>
                            </div>

                            <button type="submit" className="student-form-submit">
                                Enviar ✨
                            </button>
                        </div>
                    </form>
                </div>

                {/* ---- Result Card ---- */}
                <div className="student-form-result">
                    <div className="result-header">
                        <div className="icon-circle">📋</div>
                        <h3>Datos Enviados</h3>
                        <p>Tu información aparecerá aquí</p>
                    </div>

                    {submitted ? (
                        <div className="result-items" key={JSON.stringify(submitted)}>
                            {FIELDS.map((field) => (
                                <div className="result-item" key={field.name}>
                                    <div className="result-icon">{field.icon}</div>
                                    <div className="result-text">
                                        <p className="result-label">{field.label}</p>
                                        <p className="result-value">{submitted[field.name] || '—'}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="result-empty">
                            <div className="empty-icon">📝</div>
                            <p>Llena el formulario y presiona <strong>Enviar</strong>.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StudentForm;
