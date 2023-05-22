import React from 'react'
import styled from 'styled-components'

// const Item = styled.li`
//   color: cadetblue;
// `;  https://medium.com/rd-shipit/advanced-ways-to-write-styled-components-97ce210404e3

const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    height:100%;
`; 

const FlexDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const SmallParagraph = styled.p`
    font-size: 12px;
`


// have to divide header text from paragraph text 

const Header = () => {
    return (
        <>
        <GridDiv>
            <FlexDiv>
                <h2>
                    Here you can find a world
                    wide weather forecast
                </h2>
            </FlexDiv>
            <FlexDiv>
                <SmallParagraph>
                    Contented get distrusts certainty nay are frankness concealed ham.
                    On unaffected resolution on considered of. 
                    No thought me husband or colonel forming effects.
                    End sitting shewing who saw besides son musical adapted. 
                    Contrasted interested eat alteration pianoforte sympathize was.
                </SmallParagraph>
            </FlexDiv>
        </GridDiv>    
        </>

    )
}

Header.displayName = 'Header'

export default Header