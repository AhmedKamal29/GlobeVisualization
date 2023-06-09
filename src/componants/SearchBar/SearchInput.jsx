import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { TextField } from '@mui/material';

const SearchInput = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'absolute',
        zIndex: '9999',
        borderRadius: '20px',
        marginTop: '30px',
        marginBottom: '50px',
        backgroundColor: '#2a2a4b',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        '& .MuiInputBase-input': {
            padding: theme.spacing(1.5, 1.5, 1.5, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            width: '100%',
            color: 'white',
            [theme.breakpoints.up('sm')]: {
                width: '50ch',
                '&:focus': {
                    border: '2px solid gray',
                    boxShadow: '0 0 10px gray',
                    borderRadius: '20px',
                },
            },
        },
    }));

    const [SearchValue, setSearchValue] = useState('');

    return (
        <>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="What country would you like to see"
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                        console.log(SearchValue);
                    }}
                    value={SearchValue}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            {/* <TextField
                placeholder="What country would you like to see"
                onChange={(e) => {
                    setSearchValue(e.target.value);
                    console.log(SearchValue);
                }}
                value={SearchValue}
            /> */}
        </>
    );
};

export default SearchInput;
