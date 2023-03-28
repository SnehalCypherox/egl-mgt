const User=require( "../modal/User.modal" );
const Team=require( "../modal/Team.modal" );
const express=require( "express" );
const router=express.Router();
const bcrypt=require( "bcrypt" );
const uploads=require( "../Middleware/uploads" );
const { Validator }=require( "node-input-validator" );

router.get( "/user/:id", async ( req, res, next ) =>
{
  try
  {
    const setting=await User.findById( req.params.id );
    res.json( setting );
  } catch ( error )
  {
    next( error );
  }
} );

router.put( "/updateuser/:id", async ( req, res, next ) =>
{
  try
  {
    const { email, password, firstname, lastname }=req.body;
    await User.findByIdAndUpdate( req.params.id, {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
    } );
    res.send( "User Updated Sucessfully" );
  } catch ( error )
  {
    next( error );
  }
} );

router.post( "/addteam", uploads.single( "image" ), async ( req, res, next ) =>
{
  try
  {
    const { name, internallabel }=req.body;
    const team=new Team( {
      name,
      internallabel,
    } );
    if ( req.file )
    {
      team.image=req.file.path;
    }
    await team.save();
    res.send( {
      status: 200,
      message: "Team added successfully",
    } );
  } catch ( error )
  {
    next( error );
  }
} );

router.put( "/changepassword/:id", async ( req, res, next ) =>
{
  User.findById( req.params.id, async ( err, user ) =>
  {
    const v=new Validator( req.body, {
      old_password: "required",
      new_password: "required",
      confirm_password: "required",
    } );

    const matched=await v.check();
    if ( !matched )
    {
      return res.status( 422 ).send( v.errors );
    } else
    {
      const result=await bcrypt.compare( req.body.old_password, user.password );
      if ( req.body.new_password===req.body.confirm_password )
      {
        if ( result )
        {
          const salt=await bcrypt.genSalt();
          const passwordHash=await bcrypt.hash(
            req.body.confirm_password,
            salt
          );

          try
          {
            await User.findByIdAndUpdate( req.params.id, {
              password: passwordHash,
            } );
            res.send( "Updated Sucessfully" );
          } catch ( error )
          {
            next( error );
          }
        } else
        {
          return res.status( 200 ).json( "Password doesn't exist" );
        }
      } else
      {
        res.json( "New password and confirm password need to be same" );
      }
    }
  } );
} );

module.exports=router;
