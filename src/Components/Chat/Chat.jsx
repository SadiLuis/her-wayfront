import io from 'socket.io-client';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Picker from 'emoji-picker-react';
import moment from 'moment';
import style from "./Chat.module.css";




const Socket = io('http://localhost:5000', {
    transports: ["websocket", "polling"]
    });

export default function Chat({nombrer}) {
    const [usuarios, setUsuarios] = useState([]);
    const [mensaje , setMensaje] = useState('');
    const [mensajes, setMensajes] = useState([]);
    const [emoji, setEmoji] = useState(false);
    const divRef = useRef(null);

    const nombre = useSelector(state => state.LoginRegisReducer.nombre);
    const usuario = useSelector(state => state.LoginRegisReducer.pasajera);
    const dispatch = useDispatch();

    useEffect(() => {
        Socket.emit('conectado', usuario);
    }, [usuario]);

    useEffect(() => {
        Socket.on('mensaje', (data) => {
            setMensajes([...mensajes, data]);
        });

        return () => {
            Socket.off()
        }

    }, [mensajes]);

    useEffect(() => {
        Socket.on('usuarios', (data) => {
            setUsuarios(data);
        });

        return () => {
            Socket.off()
        }

    }, [usuarios]);

    const handleSubmit = (e) => {
        e.prevenDefault()
        Socket.emit('mensaje', {mensaje, usuario});
        setMensaje('');
    }

       const onEmojiClick = (e, emojiObject) => {
        setMensaje(mensaje + emojiObject.emoji);
        setEmoji(false);
    }

    return(
        <div className={style.bkg}>
        <div className={style.Chat}>    

            <div className={style.usuarios}>
                <h1>Usuario conectado</h1>
                {usuarios.map((e, i) => (
                    <div key={i}>
                        <div className={style.usuario}
                        >
                            {e}
                        </div>
                    </div>
                ))}
            </div>

            {mensajes.map((e, i) => (
                <div key={i}>
                    <div className={style.usuario}
                    >
                        {e.usuario} dice ...
                    </div>
                    <div className={style.mensaje} >
                        {e.mensaje}
                    </div>
                </div>
            ))}
            <div ref={divRef}></div>
        </div>
        <form  className={style.form} onSubmit={handleSubmit}>
            {/* <label htmlFor=""
                className={style.label}
            >
                Escriba su mensaje
            </label> */}
            <textarea
                className={style.textarea}
                placeholder = "Escriba su mensaje"
                name=""
                id=""
                cols="30"
                rows="10"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
            <button type="submit" className={style.button} >
                Enviar
            </button>
            </div>

            <div className={style.emoji}>
            
            <Picker onEmojiClick={onEmojiClick} />
            </div>

        </form>
    </div>
    );




}
