import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setStatus('sending');
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_KEY,
                    subject: 'New message from my portfolio',
                    name: data.name,
                    email: data.email,
                    message: data.message,
                }),
            });
            const result = await response.json();

            if (result.success) {
                setStatus('success');
                reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section className={styles.contact}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Contact<span className={styles.dot}></span>
                </h2>

                <form
                    className={styles.form}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    <input
                        type="text"
                        placeholder="Name"
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                        <p className={styles.error}>{errors.name.message}</p>
                    )}

                    <input
                        type="email"
                        placeholder="Enter email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Enter a valid email',
                            },
                        })}
                    />
                    {errors.email && (
                        <p className={styles.error}>{errors.email.message}</p>
                    )}

                    <textarea
                        placeholder="Enter your message"
                        rows="5"
                        {...register('message', {
                            required: 'Message is required',
                            minLength: {
                                value: 10,
                                message: 'At least 10 characters',
                            },
                        })}
                    />
                    {errors.message && (
                        <p className={styles.error}>{errors.message.message}</p>
                    )}

                    <button type="submit" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending...' : 'Submit'}
                    </button>

                    {status === 'success' && (
                        <p className={`${styles.message} ${styles.success}`}>Thanks! Your message was sent.</p>
                    )}
                    {status === 'error' && (
                        <p className={`${styles.message} ${styles.failure}`}>Something went wrong, try again.</p>
                    )}
                </form>
            </div>

            <div className={styles.shape}>
                {/* Back strip (with gradient)*/}
                <svg
                    className={`${styles.wave} ${styles.waveBack}`}
                    viewBox="0 0 2400 200"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="rgb(42, 115, 233)" />
                            <stop offset="100%" stopColor="rgb(215, 20, 156)" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#waveGrad)"
                        d="M0,60 C150,100 350,20 600,60 C850,100 1050,20 1200,60 C1350,100 1550,20 1800,60 C2050,100 2250,20 2400,60
                        L2400,100 C2250,60 2050,140 1800,100 C1550,60 1350,140 1200,100 C1050,60 850,140 600,100 C350,60 150,140 0,100 Z"
                    />
                </svg>

                {/* Front strip (dark) */}
                <svg
                    className={`${styles.wave} ${styles.waveFront}`}
                    viewBox="0 0 2400 200"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#2d3652"
                        d="M0,110 C150,150 350,70 600,110 C850,150 1050,70 1200,110 C1350,150 1550,70 1800,110 C2050,150 2250,70 2400,110
                        L2400,134 C2250,94 2050,174 1800,134 C1550,94 1350,174 1200,134 C1050,94 850,174 600,134 C350,94 150,174 0,134 Z"
                    />
                </svg>

                {/* Icons */}
                <a
                    className={`${styles.icon} ${styles.left}`}
                    href="https://github.com/NoorShurrab"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>

                <a
                    className={`${styles.icon} ${styles.center}`}
                    href="https://www.linkedin.com/in/noor-shurrab"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedinIn />
                </a>

                <a
                    className={`${styles.icon} ${styles.right}`}
                    href="https://www.facebook.com/share/18GxpkT6eK/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                >
                    <FaFacebookF />
                </a>
            </div>
        </section>
    );
};

export default Contact;