import servingDesk from '../img/serving_desk.png';
import servingDesk2 from '../img/serving_desk@2x.png';
import servingMob from '../img/serving_mob.png';
import servingMob2 from '../img/serving_mob@2x.png';

export function getErrorMarkup() {
    return `<li><picture>
        <source
        media="(min-width: 768px)"
        srcset="${servingDesk}, ${servingDesk2} 2x"
        type="image/png"/>
        <source
        media="(max-width: 767px)"
        srcset="${servingMob}, ${servingMob2} 2x"
        type="image/png"/>
        <img src="${servingDesk}" alt="People in the cafe" width="345" height="380"/>
        </picture>
        </li>
    `;
}
