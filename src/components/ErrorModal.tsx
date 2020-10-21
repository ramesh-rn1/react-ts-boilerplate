// import React, { Component } from 'react'
// import Dialog from '@material-ui/core/Dialog';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import '../styles/css/modal.css';

// interface Props {
//   // props validation
// }

// interface State {
//   showModal: any;
// }

// class ErrorModal extends React.Component<any, any>  {


//     static show(message: any) {
//         ErrorModal._singletonRef._show(message)
//     }

//     static hide() {
//         ErrorModal._singletonRef._hide()
//     }
    
//     constructor(props: any) {
//         super(props);
//         ErrorModal._singletonRef = this;
//         this.state = {
//             showModal: false
//         }
        
//     }

//     _show = (message: any) => {
//         this.setState({ message: message, showModal: true })
//     }

//     _hide = () => {
//         this.setState({ showModal: true })
//     }


//     render() {
//         return (
//             <Dialog
//                 open={this.state.showModal}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//             >
//                 <DialogTitle id="alert-dialog-title">{"ERROR"}</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText id="alert-dialog-description">
//                         Default message <br/> 
//                         { this.state.message }
//                     </DialogContentText>
//                 </DialogContent>
//             </Dialog>
//         )
//     }
// }


// export default ErrorModal;