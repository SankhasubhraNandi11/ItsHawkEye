import React from 'react'
import Searchbar from '../Extras/Searchbar'
import { DataBtn, DataContainer, DataContent, DataH1, DataItems, DataP } from './Data'
function FData() {
    return (
        
            <DataContainer>
                <DataContent>
                    <DataItems>
                        <DataH1>ANALYSIS !!</DataH1>
                        <DataP>PERSONALIZED</DataP>
                        <DataBtn>KNOW MORE</DataBtn>
                        <Searchbar/>
                    </DataItems>
                </DataContent>
            </DataContainer>
        
    )
}

export default FData