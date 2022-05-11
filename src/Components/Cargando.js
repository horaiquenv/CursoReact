import Spinner from 'react-bootstrap'

function Cargando(props){
    const {cargando,children}= props
    if (cargando){
        return(
            <div>
                <Spinner animation="Border"/>
            </div>
        )
        }else{
            return(
                <>
                {children}
                </>
            )
    }
}
export default Cargando