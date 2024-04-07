// refer https://github.com/hoovercj/vscode-power-mode/issues/1#issuecomment-535331889

import { IExplosion } from "src/setting";
import L from "../../L";
const type = L.sparkle();

const config: IExplosion = {
  maxExplosions: 10,
  size: 6,
  frequency: 4,
  explosionOrder: "sequential",
  gifMode: "restart",
  duration: 1000,
  offset: 0.2,
  backgroundMode: "image",
  imageList: [
    "data:image/gif;base64,R0lGODlhvAHgAfIEAP+7KTWwnf+zs/DdygAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wt4bXAgZGF0YXhtcP8/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG10YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPjxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53Lm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZjphYm91dD0iIiD/eG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1RwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmI2Zjk2YmRjLTQ1ODEtNDc3NC05MjFiLTAyOThlMjI5MjEzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU0NDFCOTEzRjQ4/zcxMUVCRDAyRkI2QUI4M0NENjUzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU0NDFCOTEyRjQ4NzFFOEJEMDJGQjZBQjgzQ0Q2NTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9ob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI2Zjk2YmRjLTQ1ODEtNDc3NC05MjFiLTAyOThlMTIyOTIxMyIgc3RSZWY6b2N1bWVudElEPSJ4bXAuZGlkOmI2Zjk2YmRjLTQ1OP8xLTQ3NzQtOTIxYi0wMjk4ZTEyMjkyMTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGEgPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19XU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1paWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAkKAAQALAAAAAC8AeABAAP/SLrc/jDKSau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5U0BAebk6Orj7O3h7/Df8vPd9fbb+PnZ6On8+vYBrOZvoLaCBrEhTGjN3z+G1BxCJLhwYjSJFqVhzAjN/+FDjs08gnzm8eNIZCVNnjSWUuXKYS1fHmspUKYvmjVt6sJZUecunht95gIqUiguoiWN2kJKUykspkidpoJKNajUTVWzXvWUlerWUV15flUVtudYVGHPvqqqNhbTtrKIwp0ldm7cpnbpxsx7NylfvUX/ug0seLDZwq0II3ZldTHjnI6nQo586jBlyS4vo52sGWzmzqY4gxb1eTSp0qZJp16FevWn1q47wY6NlXZl27hz697Nu7fv38CDCx9OvLjx48iTK1/OvLnz53YBQG8kffqi6tYTAcCe3dD27trBI+IuftD38oTOoxekfj2g7eTd84Ev/337+nvgx8d/Rz//+f/0/aeHfvsJKAeBBuJBYIEJurEggw2u8WCEBz4IIYVmWHgfhmloeCGHYnj4IYhfiDgiiVuYuCGKYKjo3wMTshiFizQGKCMUNbp4oxQ5mrgjjz1q+COQQcY45BNFGnmkE0kiuCSSTb74JBNROjllElUqeeUQWVq45RErVvnlFEGOSUWPZlZBY5pW6Mimmj6+CaeQcrZJZ51zLojnFV7umaeNfp5pZaBkDkookSseyqSUiiLaqKCJProEo5JCeWKlRACK6aKbznhpp0FECqoRoo5axKem+lBqqqGiyqoOq776g6uy4kBrrTbciuuuvPbq66/ABivssMQWa+yxyCar7LL/zDbr7LPQRivttNRWa+212Gar7bbcduvtt+CGK+645JZr7rnopqvuuuy26+678MYr77z01mvvvfjmq+++/Pbr778AB5yJAALLS/C9AiR8ML0KJ4xww/Y27DDDC0dc8MUYZ6zxxhx37PHHIIcs8sgkl2zyySinrPLKLLeMyAD6wpyvzPfSXHPMM9tc7wA608vzzC4HLfTQRBdt9NFIJ6300kw37fTTUEct9dRUV2311VhnrfXWXHft9dfN/Jxzzz6LXbPZYKet9tpst+3223DHLffcdNdt991456333nz37Q3PaJcNONl+F2744YgnrvjijDfu+OOQRy755JRXbvnlVJhnrvnmnHdOQuA+5yw6voTHC/q8p8tbuumje+7667DHLvvstNdu++2456777rz37vvvwAcv/PDEF2/88cgnr/zyzDfv/PPQRy/99NRXb/312L+dAAAh/wt4bXAgZGF0YXhtcP8/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG10YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPjxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53Lm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZjphYm91dD0iIiD/eG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1RwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmI2Zjk2YmRjLTQ1ODEtNDc3NC05MjFiLTAyOThlMjI5MjEzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU0NDFCOTEzRjQ4/zcxMUVCRDAyRkI2QUI4M0NENjUzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU0NDFCOTEyRjQ4NzFFOEJEMDJGQjZBQjgzQ0Q2NTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9ob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI2Zjk2YmRjLTQ1ODEtNDc3NC05MjFiLTAyOThlMTIyOTIxMyIgc3RSZWY6b2N1bWVudElEPSJ4bXAuZGlkOmI2Zjk2YmRjLTQ1OP8xLTQ3NzQtOTIxYi0wMjk4ZTEyMjkyMTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGEgPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19XU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1paWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAkKAAQALIYALQDnAIUBAAP/SLrc/jDKF6a9OOvNu/9gGFViaZ5oqq4j675wLIPkbN94jtZ67//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0ej3hsd89N3xOr9vv+Lx+z+/7/4CBP3KChQsBhIaGiYqNjo+QkZJFjJN8iJaLlZmcnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7eIm7xSmMDDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e33cA4D7iXr+t5V3nrOlbwrcA7Vnr7PJY9Kvx6rrx9lX49cbp0CcQB8GCNvohTHhwIQyFDmNAjPiinz+KJyxidKFx/+MKixc9ggApMgXIkCU5nExZ4iRKlhhcvoQ5QSbNDzJn3nyQc6fKnj4z5GwYNMJQokV5HtXpcynTnU6f0owqNSVVpEmvYm2qdevNrh01hPUG1qXSo+DKqp1Idm1ZgW7BFoyrdSHdqHbvLnWoF23evjb/AjY7d/BQuIb9tk2smBtjp2kfH2Y5+OvdoHSLuk2qQC3nzl0/LwgtGjTe0qNPozbdGDXk1Qz2wo49eTZrwrZvk8ytmy3vwLx7V9W8Mnjq3cYJ4E5ePLly5M6hMx873Xf14ZypX3dO2+tv77mtV+fenTxt86nRg1b/nL1y9+DDY/8c33Z9+/Dd69/Pv7////8ABijggAQWaOCBCCao4IIMNujggxBGKOGEFFZo4YUYZqjhhhyqIoB7AnzInojqhTiiiSWSaF6IKnLHYovJvQjjBCwGJSOKNOLo0401PiAjZzwGeeNnQhZZWpFBoobkkEcu+eJqTvbYZJQzFkVllTZeOSWVW3JJ5JVSZglmmDc9CYGRWWbAI3lrsmmmmzo69yacJ2IZXJwu2nmnnrzxmZufqgwgBqCnDCCoeociyp6hiyZqnqOPdijppJRWaumlmGaq6aacdurpp6CGKuqopJZq6qmopqrqqqy26uqrsMYqawiQksdoo7U6Z2ius/bq66/ABivssMQWa+yxyCar7LJKzDbr7LPQRivttNRWa+21c+yK6K686tottuCGK+645JZr7rnopqvuuuy26+678MYr77z01mvvvfg6cSt6+9r6LW/9+rtto4v2kQAAIf8LeG1wIGRhdGF4bXD/P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtdGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj48cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmY6YWJvdXQ9IiIg/3htbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUcGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiNmY5NmJkYy00NTgxLTQ3NzQtOTIxYi0wMjk4ZTIyOTIxMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NDQxQjkxM0Y0OP83MTFFQkQwMkZCNkFCODNDRDY1MyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NDQxQjkxMkY0ODcxRThCRDAyRkI2QUI4M0NENjUzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3RvaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiNmY5NmJkYy00NTgxLTQ3NzQtOTIxYi0wMjk4ZTEyMjkyMTMiIHN0UmVmOm9jdW1lbnRJRD0ieG1wLmRpZDpiNmY5NmJkYy00NTj/MS00Nzc0LTkyMWItMDI5OGUxMjI5MjEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhIDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQJCgAEACx5ACUA+QBIAQAD/0i63P4wykkDvTjrzbv/YCiOZGmeaKquhMW+cCzPpkvfeK7D9u7/wGAk0BMaj8gYMclsOkfFp3RKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8Lh8Tq/b7/i8fs/v+/+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en0ufhqGihURRpX+oqaytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM1np85gp6vR1dbX2Nna29zd3t/g4eJ7AONP5eZN6OlJ6+xHAO7vQfHz8PL2PvX59Pj8Ofv+6fMnkEY8ggVjHEyoYyFDHA4fGgwoUUZEN9RkHURohv8Uro1vMmq8qMbjR5JpTN4C2UbkSIole23kKEblSpYVYczMqRAnTxUzaf4MEXToiqBCjXZAqhQF06YmkCaFikEqVRJWr4qQOlUrBK5dvToAG1bsArJmOZAtK3YtW69u316Nm/ZCXJh1x96Va3Qv3rwE/KLMK3iw2cI+0yLeWXdx0cOOH2uNzHUuZbBKL9PlqdmvxM6O+YEenVgb6dOGnaFenW01atOuR2+LDfob7cuib6NlqJtxTt1NY1smDbe2YtyEKQMOHHo588LOzwqOzmA6dQWer0vfrP352u7V3YLfjnk8+azmvT9Nj70y+/br37t/D983/fj3JdNX/5e9/v3/9u2nnoDhpZZegACWlmB/8hl4oIPmKZgfX8tBGCGDDVIImIXjcdihhhuCmByBepHYAIYNmhieitKx2J6LzMEYmIxUCCCjjTAKgKOLO7LYo4o/mqhjjkESOCSPRwKZpJBLMklkkfvpCCV9UiLZpIBSTslellqax6WSVTKZpZhhGslll92dieZ1al7pZZtYtrmmc3K6mWadVNY5Z1562hldn2XeCeieXg0a6J+GHpqBogUl+uUEcubk6KRnSkrppTxdSulQmiZqVKeDKgUqoKKOimeppqrZVKqRosrqo5y+qupPsrZaUa2nPoRrnxLtqqdZrwJmKp2dIropm5MKGip4gZ6OZ2h6pG75q7S5QluttXDmOWuU22oLK7ffessoteNiW665hFIXLrh+kuvjueZaKe+77VI7L5hE5oukvjzeeGO62tX7HsAB02jwwQgnrPDCDDfs8MMQRyzxxBRXbPHFGGes8cYcd+zxxyCHLPLIJJds8skoEzjAyjCuPICLL6eRAAAh/wt4bXAgZGF0YXhtcP8/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG10YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPjxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53Lm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZjphYm91dD0iIiD/eG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1RwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmI2Zjk2YmRjLTQ1ODEtNDc3NC05MjFiLTAyOThlMjI5MjEzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU0NDFCOTEzRjQ4/zcxMUVCRDAyRkI2QUI4M0NENjUzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU0NDFCOTEyRjQ4NzFFOEJEMDJGQjZBQjgzQ0Q2NTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9ob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI2Zjk2YmRjLTQ1ODEtNDc3NC05MjFiLTAyOThlMTIyOTIxMyIgc3RSZWY6b2N1bWVudElEPSJ4bXAuZGlkOmI2Zjk2YmRjLTQ1OP8xLTQ3NzQtOTIxYi0wMjk4ZTEyMjkyMTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94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MS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YjZmOTZiZGMtNDU4MS00Nzc0LTkyMWItMDI5OGUyMjkyMTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTQ0MUI5MTNGNDj/NzExRUJEMDJGQjZBQjgzQ0Q2NTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTQ0MUI5MTJGNDg3MUU4QkQwMkZCNkFCODNDRDY1MyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjZmOTZiZGMtNDU4MS00Nzc0LTkyMWItMDI5OGUxMjI5MjEzIiBzdFJlZjpvY3VtZW50SUQ9InhtcC5kaWQ6YjZmOTZiZGMtNDU4/zEtNDc3NC05MjFiLTAyOThlMTIyOTIxMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YSA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWlpZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkECQoABAAsTwBDAFkBSAEAA/9Iutz+MMpJq7046827/xQAgGRpnmiqrmz7iW4sz3Rt3y6M73zv/8CNLkgsGo/I0jDJbDqfwSV0Sq1aX6OrdsvtKqTesHjsE2XJ6LS6ZV6733AOOE6v1+f2vJ6M31cDfoF9gVCAhIeIfwGGDIyJj5A7i5MElJGXmDOTm46Znp8mnIugpKUeop2mqqsQqKmssKuur7G1spa2ubC4ur2mo77BpbTCxcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/v8AAwocSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLH/o8ePIEOKHEmypMmTKFOqrDFoJas2LoPBjKnLzBmatWzizDVzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNl+AgScFaN2rZe0bt/G7QJ37pa6dq/gzUtlL98pfv8+CSy4CeHCSNK2RexEMePBhx8TcSyZSeTKQRZj3sy5s+fPoEOLHk06ms7SN2z2RB1DtWvWNl7Dnk27tu3buHPr3s27t+/fwIODviw8A+XiII4j76B8OYfmzo1rjk69uvXr2LNr3869u/fv2Il3hw6egOLp5c+XZ3AePXjy6d2vn0+/vv37S+Wvhx9fPPf2//gBaF97+nlH4H3q4Weeggw2mNFq80FY3mn1SThhS9xRSJ+F4HHonYcfYpjhTRWS6OCJKKao4oostujiizDGKOOMNNZo44045qjjjjz26OOPQDIl4HwE+nddkQnuh2SQTDbp5JNQRinllFRWaeWVWGap5ZZcdvnjAAyCqaCY+A1A5n1n2pdmfWvS1+Z8Zo75ZnlxllmnmneymaebZs7pXZ9+dgdooNoNSmh2hh56XaJ8GgpnoopSB2mkzk2653aWXopdpoBSoOlunIY6KHCilhpcqaEWh6qlqq4KaT1GQuPqq7DG6sysjt7DXzS4Mqqrrcj0Oik+uzYjLK2/FnjNrFf5FJvNqs0CW42o+ji7TarESrssq9Eq+w232Xr7LbK/skOuPdaC42u47axbrju5JvtOvOiKS86oevaJpr54fvpdp/tSuqm//xJcsJwI2xnmwmMyXGY0CQAAIf8LeG1wIGRhdGF4bXD/P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtdGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj48cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmY6YWJvdXQ9IiIg/3htbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUcGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiNmY5NmJkYy00NTgxLTQ3NzQtOTIxYi0wMjk4ZTIyOTIxMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NDQxQjkxM0Y0OP83MTFFQkQwMkZCNkFCODNDRDY1MyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NDQxQjkxMkY0ODcxRThCRDAyRkI2QUI4M0NENjUzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3RvaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiNmY5NmJkYy00NTgxLTQ3NzQtOTIxYi0wMjk4ZTEyMjkyMTMiIHN0UmVmOm9jdW1lbnRJRD0ieG1wLmRpZDpiNmY5NmJkYy00NTj/MS00Nzc0LTkyMWItMDI5OGUxMjI5MjEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhIDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQJCgAEACxEAEQACgFNAQAD/0i63P4wykmrfeHqzbv/YCiOZJeVaKqubOt65yvPdG3TQXzvfO//uZ9wSCyKgsakcqnM6ZjQqLTlnFqv2I/zme16vduveHzdcsnotM98VrvfLnYbTq+D5EjH3M7vK/CAe36Db4FyhIh+hmaJjXaLVY6SbpCRk5dilZaYnGVBmp2hY4GipV+Apqldh6qtVoyusVGwsrVNm7a5QmG6vbt5vsE3uMLFMsDGyVSCys13zM7RHNDS1RXU1tkQ2Nrd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/wADChxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsf+jx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+q8IkDAzh89f/YIKpQH0aI2evpEmnRpOwBQAUQ7yi6q1GZK4VnFSrXqVa5Mb3QN6yIr2Rlmz75Iq7YF27Yr3sJNMXYuirp2SeDNy7ev37+AAwseTLiw4cOIEytezLix48eQI0ueTLmy5cuYM2vezLmz58+gQ4seTbq06dOoU6tezbq169ewY8ueTbu27du4c+vezbt3TKeZ90qWW1kpcMvGjxc3Hjx5c+aXkwt37Ny39evYs2vfzr279+/gw4sfT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+/f7T/0C0nnYDSTadYgdUVpwBx/zXo4IMQRijhhCENwJmFm2GomYaZcYjZAB5aBmKGIVY24oYlUnZihyteBmKKkr2IIoyRycgijZC9iKNjOt64Y2M9fhikiTr+qFiRRiaGZJKHLSmik5Mt2WKOUjIpWJU2PobllIttmWWXXn6JWJhFHklmmU2eCeVgam4JWJtq5gXnnEP+ROedXN6EJ51F7QlnW356+VegYvoVqGF3KvknmGTyGGYoyuXzKCcM2iNoJwbS4yalmWoqJaSdzlMlppVKiiSokfKzJialmlrnJQEGhCanqfYzK6uhWvqqJLHKWiivueqapyOtqjpsIr0K9GsjJ8UaayUdze6zLLK1AnQsItFK+ywc2epzLSHBmnrhuBmSu6G5HQqRAAAh/wt4bXAgZGF0YXhtcP8/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG10YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPjxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53Lm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZjphYm91dD0iIiD/eG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1RwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmI2Zjk2YmRjLTQ1ODEtNDc3NC05MjFiLTAyOThlMjI5MjEzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU0NDFCOTEzRjQ4/zcxMUVCRDAyRkI2QUI4M0NENjUzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU0NDFCOTEyRjQ4NzFFOEJEMDJGQjZBQjgzQ0Q2NTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9ob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI2Zjk2YmRjLTQ1ODEtNDc3NC05MjFiLTAyOThlMTIyOTIxMyIgc3RSZWY6b2N1bWVudElEPSJ4bXAuZGlkOmI2Zjk2YmRjLTQ1OP8xLTQ3NzQtOTIxYi0wMjk4ZTEyMjkyMTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGEgPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19XU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1paWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAUKAAQALDMAOwAmAWUBAAP/SLrc/jDKSau9MODNu/9gKI5kaT7aqa5s674wm8Z0bd94PgWz7v/AoHA3LBqPyFYvyWw6n4wldEqt4njWrHarwnK/4HDFKy6bwzzpec1uptvwOPItr9tzafJ9z1/l1X2Bghx/gIOHiCiFiYyNDYWGjpJ7kJGTl22VepiccJqbnaFin3mKdKKobqSrlqmuOqykr7NGsZq0uEK2kLm9PruLvsI2wMHDx0rFxsjMJcq8zdEuwNLVL7HW2TKy2t0n3N7hI5/i5SKV5ukg0OrtG8vu8Tt/8vUUpfb5Gaf6/Qr4/gLyC6hvIMF8oA7WS6gwHsOG7R5CVNdqoriKFr1JzBhu/yNHjR/lYQxZbSTJaCZPqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1Ktao3AVYFCcCalc9Wrl3vbA275ytZsWPPyjGrdm3atnDYwmUjd+6aunbN4M0bZi9fMH7/cgnMDIBLwoVbIkZmmOXiYwAaCzYTeTJlyZbBRMacecvmyhI2d0byGbQD0aNJl179OXUS1rBdv4bdWvZs2pxtD8GNWncR3qZ97wYu/Dfx4kGA90auQ/ly5jaCM4gN/Ubu06Wr35au3fj17sm5gxcifnx480fKo/fxfT179/Djy59Pv779+/jz69/Pv7////8ABijggAQWaOCBCCao4IIMNujggxBGKOGEFFZo4YUYZqjhhhx26OGHIIYo4ogklmjiiSimeBRYH77l4WMVfsUihzLOqGGNIOL4oo40uqjij0AGKeSQRBZp5JFIJqnkkkw26eSTUEYp5ZRUVmnllVhmqeWWXHbp5ZdghinmmGSWaeaZaKap5ppstunmm3DGKeecdNZp553dDSCiniDy2eeeIQ7gp4eD2gejCIXOV6OPFy56KIOO8thopI/iaemlmGaq6aacdupeohwK6umopJZq6qk8gaqhqB+yiuqrsD6o6oautlprq7HmquuuvPbq66/ABivssMQWa+yxwd4aqqBUyiLr7LPQRivttNRWa+212Gar7bbaydhipQ9626GkN4LroLg9mnvQrL6g6xK7vbjLUrPCyDsvvLjYuxK++TK6L7+0qLsuwK8IvG41BhNEcME2gpcAADs=",
  ],
};

export default { type, config };