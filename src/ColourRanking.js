import Trending from './Trending';
import Popular from './Popular';
import UpAndComing from './UpAndComing';

export default function Ranking() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Trending />
                </div>
                <div className="col">
                    <Popular />
                </div>
                <div className="col">
                    <UpAndComing />
                </div>
            </div>
        </div>
    )
}