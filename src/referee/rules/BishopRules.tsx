import { TeamType } from "../../Types";
import { Piece, Position } from "../../models";
import { tileIsEmptyOrOccupiedByOpponent, tileIsOccupied, tileIsOccupiedByOpponent } from "./GeneralRules";

export const bishopMove = (
    initialPosition: Position,
    desiredPosition: Position,
    team: TeamType,
    boardState: Piece[]) : boolean =>{
        for(let i = 1; i < 8; i++)
        {
            if(desiredPosition.x > initialPosition.x && desiredPosition.y > initialPosition.y){
            let passedPosition: Position = new Position(initialPosition.x + i, initialPosition.y + i);
            if(passedPosition.samePosition(desiredPosition)){
                if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)){
                    return true;
                    }
                }else {
                    if(tileIsOccupied(passedPosition, boardState)){
                    break;
                    }
                }
            }
            
            if(desiredPosition.x > initialPosition.x && desiredPosition.y < initialPosition.y){
                let passedPosition: Position = new Position(initialPosition.x + i, initialPosition.y - i);
            
            if(passedPosition.samePosition(desiredPosition)){
                if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)){
                    return true;
                    }
                }else {
                    if(tileIsOccupied(passedPosition, boardState)){
                    break;
                    }
                }
            }
            
            if(desiredPosition.x < initialPosition.x && desiredPosition.y < initialPosition.y){
                let passedPosition: Position = new Position(initialPosition.x - i, initialPosition.y - i);
            if(passedPosition.samePosition(desiredPosition)){
                if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)){
                    return true;
                    }
                }else {
                    if(tileIsOccupied(passedPosition, boardState)){
                    break;
                    }
                }
            }
                    
            if(desiredPosition.x < initialPosition.x && desiredPosition.y > initialPosition.y){
                let passedPosition: Position = new Position (initialPosition.x - i, initialPosition.y + i);
            if(passedPosition.samePosition(desiredPosition)){
                if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)){
                    return true;
                }
                }else {
                    if(tileIsOccupied(passedPosition, boardState)){
                    break;
                }
            }
        }
    }
        return false;
}

export const getPossibleBishopMoves = (bishop: Piece, boardState:Piece[]) : Position[] => {
    const possibleMoves: Position[] = [];
    for(let i = 1; i < 8; i++)
    {
        const destination: Position = new Position(bishop.position.x + i, bishop.position.y + i);

        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination);
        } else if(tileIsOccupiedByOpponent(destination, boardState, bishop.team)) {
            possibleMoves.push(destination);
            break;
        } else {
            break;
        }
    }

    for(let i = 1; i < 8; i++)
    {
        const destination: Position = new Position (bishop.position.x + i, bishop.position.y - i);

        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination);
        } else if(tileIsOccupiedByOpponent(destination, boardState, bishop.team)) {
            possibleMoves.push(destination);
            break;
        } else {
            break;
        }
    }

    for(let i = 1; i < 8; i++)
    {
        const destination: Position = new Position(bishop.position.x - i, bishop.position.y - i);

        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination);
        } else if(tileIsOccupiedByOpponent(destination, boardState, bishop.team)) {
            possibleMoves.push(destination);
            break;
        } else {
            break;
        }
    }

    for(let i = 1; i < 8; i++)
    {
        const destination: Position = new Position (bishop.position.x - i, bishop.position.y + i);

        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination);
        } else if(tileIsOccupiedByOpponent(destination, boardState, bishop.team)) {
            possibleMoves.push(destination);
            break;
        } else {
            break;
        }
    }

    return possibleMoves;
}