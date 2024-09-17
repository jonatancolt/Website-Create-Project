import styles from '../form/Select.module.css';

function Select({ text, name, options = [], handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value}>
                <option value="">Selecione uma opção</option>
                {Array.isArray(options) && options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name} {/* Aqui estamos garantindo que `option.name` é uma string */}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
