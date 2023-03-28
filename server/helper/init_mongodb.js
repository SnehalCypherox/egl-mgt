const mongoose=require( 'mongoose' );

( process.env.ENVIRONMENT === "production" ) ? console.log("Production") : console.log("Development")

mongoose
    .connect( ( process.env.ENVIRONMENT === "production" ) ? process.env.PROD_MONGODB_URI : process.env.DEV_MONGODB_URI  , {
        dbName: process.env.DB_NAME, 
    } )
    .then( () =>
    {
        console.log( 'mongoose connected.' );
    } )
    .catch( err => console.log( err.message ) );


mongoose.connection.on( 'error', err =>
{
    console.log( err.message );
} );

mongoose.connection.on( 'disconnected', () =>
{
    console.log( 'Mongoose is disconnected' );
} );

process.on( 'SIGINT', async () =>
{
    await mongoose.connection.close();
    process.exit( 0 );
} );
