import styles from "./LoginButton.module.css"

function LoginButton() {
    return (
        <section  className={styles.button}>
            <button>Sign In!</button>
        </section>
    )
}

export default LoginButton;