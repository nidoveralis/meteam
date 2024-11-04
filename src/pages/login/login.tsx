import clsx from 'clsx';
import styles from './login.module.scss';
import EyeOff from '../../assets/icons/eye-off.svg';
import Logo from '../../assets/icons/logodark.svg';


const Login = () => {


  return (
    <section className={styles.login}>
      <form>
        <div className={styles.login__container}>
          <img src={Logo} alt='logotype' />
          <h2 className={styles.login__title}>Merci d'entrer vos informations de connexion</h2>
        </div>
        <fieldset>
          <label>Email</label>
          <input type='text' className="login__input" name="mail" />
        </fieldset>
        <fieldset className={styles.login__password}>
          <label>Mot de passe</label>
          <input type='password' className="login__input" name="parol" />
          <img src={EyeOff} alt='showPassword' className={styles.login__icon} />
        </fieldset>
      </form>
      <div className={clsx(styles.login__container, styles.login__container_under)}>
        <span>Mot de passe oublié ?</span>
        <button className={styles.login__btn}><span>Se connecter</span><i className={styles.btn__icon} /></button>
        <span>Vous n’avez pas de compte ? <a>Créer un compte</a></span>
      </div>
    </section>
  )
}

export default Login;