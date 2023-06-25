namespace AWS.IVS.PlayerManager {
    export class Player {
        private _uniqueId: string;
        private _mediaPlayer: any;

        public get mediaPlayer(): any {
            return this._mediaPlayer;
        }

        /**
         * Set MediaPlayer Instance
         * @param mediaPlayer - MediaPlayer instance
         */
        public set mediaPlayer(mediaPlayer: any) {
            this._mediaPlayer = mediaPlayer;
        }

        /**
         * Player Instance unique identifier
         */
        public get uniqueId(): string {
            return this._uniqueId;
        }

        /**
         * AWS Interative Video Services Player
         * @constructor
         * @param uniqueId - Unique Identifier of this Player instance
         */

        constructor(uniqueId: string) {
            this._uniqueId = uniqueId;
        }

        /**
         * Load a stream into player instance
         * @param path - Full path to stream
         */
        public loadStream(path: string) {
            this._mediaPlayer.load(path);
        }

        /**
         * Starts playing a stream
         */
        public play() {
            this._mediaPlayer.play();
        }
    }
}
