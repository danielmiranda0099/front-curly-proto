import { CloseIcon } from '@/icons';
import './modal.css';

const HeaderModal = ({textHeader, onClose}) => {
    return(
        <div className="modal-header">
            <div className='modal-header-text'>
                <span>{textHeader}</span>
            </div>
            <div
                className="modal-close"
                onClick={()=> onClose(false)}
            >
                <CloseIcon size={"auto"}/>
            </div>
        </div>
        
    )
}



export function Modal({ children, open, onClose, textHeader="", ...props })  {
    const handleClickModal = (event) => {
        if (event.target.classList.contains("modal")) {
            console.log('Cerando Modal')
            onClose(false);
          }
    }
    
    return(
        <>
        {open &&
            <div className="modal" onClick={handleClickModal}>
                <div className="modal-contenedor">
                    <HeaderModal textHeader={textHeader} onClose={onClose} />
                    {children}
                </div>
            </div>
        }
        </>
    );
}
