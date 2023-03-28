const mongoose=require( 'mongoose' );
const Schema=mongoose.Schema

const UnitUploadDetails=new Schema( {
    unitname: {
        type: String,
    },
    image1: String,
    added_date: {
        type: Date,
        default: Date.now
    },
    update_date: {
        type: Date,
        default: Date.now
    }
} )

const UnitUploadDetail=mongoose.model( "UnitImages", UnitUploadDetails )
module.exports=UnitUploadDetail