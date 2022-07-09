import React from "react";

export function Stats(props) {
    return (
        <div style={{alignContent: 'center', width: '100%', marginTop: '2em'}}>
            <table style={{margin: 'auto'}}>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>Height</td>
                    <td>{props.pokeData.getHeight()}m</td>
                </tr>
            </table>
        </div>
    )
}
