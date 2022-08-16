import {Typography, Box } from '@material-ui/core'
// import { ArrowBack as BackIcon } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Bookmarks = ({ bookmarks }) => {
    return (
        <>
            {
                !!Object.keys(bookmarks).length ?
                    Object.keys(bookmarks).map(b =>
                        <Box key={b} to={`/search/${b}`} component={Link} sx={{
                            p: 2,
                            cursor: 'pointer',
                            backgroundColor: 'white',
                            borderRadius: 1,
                            textTransform: 'capitalize',
                            mb: 2,
                            fontWeight: 800,
                            display: 'block',
                            color: 'black',
                            textDecoration: 'none'
                        }}>
                            {b}
                        </Box>)

                    : <Typography sx={{ mt: 5 }} align="center">No Bookmarks</Typography>
            }



            <div className='feild'>
             <input type="text" placeholder="enter">
                
             </input>
            </div>
        </>
    )
}

export default Bookmarks
