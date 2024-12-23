import { default as $, IF, ELSE, ELSEIF, ENDIF, FOR } from '../templates/tte.mjs'

export default function unityenv_for_puerts(newerthan2021, newerthan6000, shared) {
    return $`
${IF(newerthan2021)}
#ifndef UNITY_2021_1_OR_NEWER
    #define UNITY_2021_1_OR_NEWER
#endif
${ENDIF()}

${IF(newerthan6000)}
#ifndef UNITY_6000_0_OR_NEWER
    #define UNITY_6000_0_OR_NEWER
#endif
${ENDIF()}

${IF(shared)}
#ifndef PUERTS_SHARED
    #define PUERTS_SHARED
#endif
${ENDIF()}
    `
}