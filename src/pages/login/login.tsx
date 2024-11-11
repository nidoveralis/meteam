import clsx from 'clsx';
import styles from './login.module.scss';
import EyeOff from '../../assets/icons/eye-off.svg';
import Logo from '../../assets/icons/logodark.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionRegisterUser } from '../../redux/action/user/actionUser';
import { AppDispatch } from '../../redux/reducer/store';


const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<string>('');
  const [isPasswordCopy, setIsPasswordCopy] = useState<string>('');
  const [isMail, setIsMail] = useState<string>('');
  const [isPhone, setIsPhone] = useState<string>('');

  // const [isResetPassword, setIsResetPassword] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isCheckbox, setIsCheckbox] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);


  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>, state: (state: string) => void) => {
    state(e.target.value);
  };

  const handleChangeInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {

    const {name, value} = e.target;

    if(!isLogin) {
      if(name === 'parolcopy') {
        setIsPasswordCopy(value);
      } else {
        setIsPassword(value);
      }
      if(isPassword !== isPasswordCopy) {
        console.log('err', isError);
        setIsError(true);
      }
    } else {
      setIsPassword(value);
    }
  };

  const handleLogin = () => {
    console.log(isMail, isPhone, isPassword);
    dispatch(actionRegisterUser(isMail));
  };

  return (
    <section className={styles.login}>
      <form>
        <div className={styles.login__container}>
          <img src={Logo} alt='logotype' />
          <h2 className={styles.login__title}>Merci d'entrer vos informations de connexion</h2>
        </div>
        <fieldset className={styles.login__password}>
          <label>{isLogin ? 'Email' : 'Adresse e-mail'}</label>
          <input
            type='text'
            className={clsx(styles.login__input, isError && styles.login__input_error)}
            name="mail"
            onChange={(e) => handleChangeInput(e, setIsMail)}
          />
        </fieldset>
        {!isLogin &&
          <fieldset className={styles.login__password}>
            <label>Numéro de téléphone</label>
            <input
              type='tel'
              className="login__input"
              name="tel"
              onChange={(e) => handleChangeInput(e, setIsPhone)}
            />
          </fieldset>}
        <fieldset className={styles.login__password}>
          <label>Mot de passe</label>
          <input
            type={isVisiblePassword ? 'text' : 'password'}
            className="login__input"
            onChange={handleChangeInputPassword}
            value={isPassword}
            name="parol"
            autoComplete="off"
          />
          <img
            src={EyeOff}
            alt='showPassword'
            className={styles.login__icon}
            onClick={() => setIsVisiblePassword(!isVisiblePassword)}
          />
        </fieldset>
        {!isLogin &&
          <fieldset className={styles.login__password}>
            <label>Confirmer votre mot de passe</label>
            <input
              type={isVisiblePassword ? 'text' : 'password'}
              className="login__input"
              onChange={handleChangeInputPassword}
              value={isPasswordCopy}
              name="parolcopy"
              autoComplete="off"
            />
            <img
              src={EyeOff}
              alt='showPassword'
              className={styles.login__icon}
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
            />
          </fieldset>}
        {!isLogin &&
          <fieldset className={styles.login__checkbox}>
            <span>J'accepte les termes et <a>les conditions d'utilisation.</a></span>
            <input
              type='checkbox'
              className=""
              onChange={() => setIsCheckbox(!isCheckbox)}
              checked={isCheckbox}
            />
          </fieldset>}
      </form>
      <div className={clsx(styles.login__container, styles.login__container_under)}>
        {isLogin && <span>Mot de passe oublié ?</span>}
        <button className={styles.login__btn} onClick={handleLogin}>
          <span className={clsx(styles.login__btnSpan, isLogin ? styles.login__btnSpan_arrow : '')}>{isLogin ? 'Se connecter' : 'S’inscrire'}</span>
          <i className={styles.btn__icon} style={{ display: isLogin ? 'block' : 'none' }} />
        </button>
        {isLogin
          ? <span>Vous n’avez pas de compte ? <a onClick={() => (setIsLogin(!isLogin))}>Créer un compte</a></span>
          : <span>Vous possedez déjà un compte ? <a onClick={() => (setIsLogin(!isLogin))}>Se connecter</a></span>
        }
      </div>
    </section>
  )
}

export default Login;