import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles=makeStyles({
    banner:{
        background:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(./images/banner.jpg)",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        paddingTop:"20px"
    },
    line:{
        "&::after":{
            position:"absolute",
            content:"' '",
            height:"3px",
            width:"45px",
            backgroundColor:"#5142fc",
            top:"50%",
            left:"calc(100% + 20%)",
            transform:"translateY(-50%)"
        },
        color:"#5142fc",
        display:"inline-block",
        position:"relative"
    },
    card:{
        padding:"20px",
        backgroundColor:"#16151A",
        borderRadius:"10px",
        maxWidth:"400px"
    },
    imgBox:{
        display:"contents"
    },
    title:{
        marginTop:"20px",
        marginBottom:"15px"
    },
    eth:{
        margin:"15px 0px"
    },
    cardCollect:{
        backgroundColor:"#121117",
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        padding:"20px",
        maxWidth:"39s0px",
        borderRadius:"10px"
    },
    collectText:{
        display:"flex",
        flexDirection:"column"
    },
    imgContainer:{
        maxWidth:"90px",
        margin:"0px 30px 0px 0px"
    },
    btnBox:{
        margin:"40px 0px"
    },
    iconBox:{
        fontSize:"45px",
        color:"#5142FC",
    },
    blogCardText:{
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row",
        padding:"10px 20px"
    },
    spaceBetween:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
    },
    view:{
        display:"flex",
        alignItems:"center",
        color:"#F5F5F5",
    },
    centerGrid:{
        display:"flex",
        justifyContent:"center"
    },
})


export default useStyles