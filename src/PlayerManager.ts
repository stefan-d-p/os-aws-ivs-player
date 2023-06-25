/// <reference types="amazon-ivs-player" />

namespace AWS.IVS.PlayerManager {
    const players = new Map<string, Player>();
    let activePlayer: Player = undefined;
    // @ts-ignore

    export function CreatePlayer(playerId: string): Player {
        const _player: Player = new Player(playerId);

        if (players.has(playerId)) {
            throw new Error(
                `There is already an AWS IVS player registered under id: ${playerId}`
            );
        }

        players.set(playerId, _player);
        activePlayer = _player;

        return _player;
    }

    export function InitializePlayer(playerId: string) {
        const player = GetPlayerById(playerId);
        const videoElement = GetVideoElementByPlayerId(playerId);

        // @ts-ignore
        player.mediaPlayer = IVSPlayer.create();
        player.mediaPlayer.attachHTMLVideoElement(videoElement);
    }

    export function LoadStream(playerId: string, path: string) {
        const player = GetPlayerById(playerId);
        player.loadStream(path);
    }

    export function Play(playerId: string) {
        const player = GetPlayerById(playerId);
        player.play();
    }

    export function GetActivePlayer(): Player {
        return activePlayer;
    }

    export function GetPlayerById(playerId: string): Player {
        let _player: Player;

        if (players.has(playerId)) {
            _player = players.get(playerId);
        }

        if (_player === undefined) {
            throw new Error(`Player id:${playerId} not found`);
        }

        return _player;
    }

    export function GetVideoElementByPlayerId(
        playerId: string
    ): HTMLVideoElement {
        const obj = document.getElementsByName(playerId);

        if (obj.length) {
            return <HTMLVideoElement>obj[0];
        } else {
            throw new Error(
                `HTML Element with name ${playerId} does not exist`
            );
        }
    }
}
