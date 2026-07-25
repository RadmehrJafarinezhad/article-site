import styles from "./Input.module.css";

function Input({ configs, handler, value }) {

    if (configs.sort === "input") {

        return (
            <div className={styles.container}>
                <h3>{configs.title}</h3>

                <input
                    name={configs.name}
                    type={configs.type}
                    style={{
                        height: configs.height,
                        width: configs.width,
                        padding: "10px",
                    }}
                    onChange={handler}
                    value={value}
                />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h3>{configs.title}</h3>

            <textarea
                name={configs.name}
                onChange={handler}
                style={{
                    height: configs.height,
                    width: configs.width,
                    padding: "10px",
                }}
                value={value}
            />
        </div>
    );
}

export default Input;