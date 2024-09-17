import styles from './Home.module.css'
import LinkButton from './LinkButton'
function Home() {
    return (
        <section className={styles.home_container}>
            <h1>
                Bem vindo ao <span>Gomes</span>
            </h1>

            <p>comece a gerenciar os seus projetos agora mesmo</p>
            <br></br><br></br>
            <LinkButton to="/NewProject" text="Criar Projeto" />
            
        </section>

    )
}

export default Home