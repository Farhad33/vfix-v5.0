const icons = {
  'arrow-left': 'M960 448h-714.88l215.040-211.84c11.313-11.535 18.295-27.352 18.295-44.8s-6.982-33.265-18.305-44.81l0.010 0.010c-11.568-11.501-27.514-18.611-45.12-18.611s-33.552 7.109-45.123 18.614l0.003-0.003-369.92 365.44 90.24 89.6 279.040 275.84c11.568 11.501 27.514 18.611 45.12 18.611s33.552-7.109 45.123-18.614l-0.003 0.003c11.313-11.535 18.295-27.352 18.295-44.8s-6.982-33.265-18.305-44.81l0.010 0.010-214.4-211.84h714.88c35.346 0 64-28.654 64-64s-28.654-64-64-64v0z',
  'burger': 'M1024 128c0 35.346-28.654 64-64 64v0h-896c-35.346 0-64-28.654-64-64v0 0c0-35.346 28.654-64 64-64v0h896c35.346 0 64 28.654 64 64v0zM1024 876.8c0 35.346-28.654 64-64 64v0h-896c-35.346 0-64-28.654-64-64v0 0c0-35.346 28.654-64 64-64v0h896c35.346 0 64 28.654 64 64v0zM1024 502.4c0 35.346-28.654 64-64 64v0h-896c-35.346 0-64-28.654-64-64v0 0c0-35.346 28.654-64 64-64v0h896c35.346 0 64 28.654 64 64v0z',
  'close': 'M998.4 877.227l-364.373-365.227 365.227-365.227c15.433-15.539 24.971-36.949 24.971-60.587 0-47.488-38.497-85.985-85.985-85.985-23.85 0-45.432 9.71-61.009 25.393l-0.005 0.005-365.227 364.373-365.227-364.373c-15.467-15.59-36.9-25.241-60.587-25.241s-45.12 9.651-60.581 25.236l-0.006 0.006c-15.59 15.467-25.241 36.9-25.241 60.587s9.651 45.12 25.236 60.581l0.006 0.006 364.373 365.227-364.373 365.227c-15.59 15.467-25.241 36.9-25.241 60.587s9.651 45.12 25.236 60.581l0.006 0.006c15.467 15.59 36.9 25.241 60.587 25.241s45.12-9.651 60.581-25.236l0.006-0.006 365.227-364.373 365.227 364.373c15.505 15.505 36.926 25.096 60.587 25.096 47.321 0 85.682-38.361 85.682-85.682 0-23.661-9.59-45.081-25.096-60.587v0z',
  'instagram': 'M870.4 38.4h-716.8c-56.32 0-102.4 46.080-102.4 102.4v716.8c0 56.371 46.080 102.4 102.4 102.4h716.8c56.32 0 102.4-46.029 102.4-102.4v-716.8c0-56.32-46.080-102.4-102.4-102.4zM511.181 781.978c156.621 0 283.546-127.027 283.546-283.597 0-17.306-2.202-33.997-5.274-50.381h80.947v369.459c0 19.558-15.872 35.328-35.482 35.328h-645.837c-19.61 0-35.482-15.77-35.482-35.328v-369.459h79.309c-3.123 16.384-5.325 33.075-5.325 50.381 0 156.621 127.027 283.597 283.597 283.597zM333.978 498.381c0-97.894 79.36-177.203 177.254-177.203 97.843 0 177.254 79.309 177.254 177.203s-79.411 177.254-177.254 177.254c-97.946 0-177.254-79.36-177.254-177.254zM834.918 294.4h-82.688c-19.558 0-35.43-15.974-35.43-35.43v-82.79c0-19.558 15.872-35.379 35.379-35.379h82.688c19.661 0 35.533 15.821 35.533 35.379v82.739c0 19.507-15.872 35.482-35.482 35.482z',
  'facebook': 'M870.4 38.4h-716.8c-56.32 0-102.4 46.080-102.4 102.4v716.8c0 56.371 46.080 102.4 102.4 102.4h358.4v-358.4h-102.4v-126.72h102.4v-104.96c0-110.797 62.054-188.621 192.819-188.621l92.314 0.102v133.376h-61.286c-50.893 0-70.246 38.195-70.246 73.626v86.528h131.482l-29.082 126.669h-102.4v358.4h204.8c56.32 0 102.4-46.029 102.4-102.4v-716.8c0-56.32-46.080-102.4-102.4-102.4z',
  'twitter': 'M886.579 306.995c0.41 8.294 0.563 16.691 0.563 24.986 0 255.488-194.406 549.99-549.888 549.99-109.21 0-210.739-32-296.294-86.886 15.155 1.792 30.515 2.714 46.080 2.714 90.624 0 173.926-30.925 240.026-82.688-84.531-1.587-155.955-57.395-180.531-134.195 11.776 2.202 23.91 3.379 36.352 3.379 17.664 0 34.765-2.304 50.944-6.707-88.422-17.818-155.034-95.898-155.034-189.594 0-0.819 0-1.587 0-2.406 26.061 14.49 55.91 23.194 87.552 24.218-51.866-34.714-86.016-93.798-86.016-160.922 0-35.379 9.523-68.608 26.214-97.178 95.283 116.992 237.773 193.894 398.387 201.984-3.277-14.182-4.966-28.877-4.966-44.083 0-106.701 86.477-193.178 193.229-193.178 55.603 0 105.83 23.398 141.107 60.979 43.981-8.704 85.35-24.781 122.726-46.899-14.438 45.107-45.107 82.995-84.992 106.906 39.117-4.71 76.288-15.002 111.002-30.413-25.907 38.81-58.675 72.806-96.461 99.994z',
  'slider': 'M960 222.72h-102.4c-25.451-56.194-81.043-94.582-145.6-94.582s-120.149 38.387-145.194 93.581l-0.406 1.001h-502.4c-35.346 0-64 28.654-64 64s28.654 64 64 64v0h502.4c25.451 56.194 81.043 94.582 145.6 94.582s120.149-38.387 145.194-93.581l0.406-1.001h102.4c35.346 0 64-28.654 64-64s-28.654-64-64-64v0zM960 670.72h-502.4c-25.451-56.194-81.043-94.582-145.6-94.582s-120.149 38.387-145.194 93.581l-0.406 1.001h-102.4c-35.346 0-64 28.654-64 64s28.654 64 64 64v0h102.4c25.451 56.194 81.043 94.582 145.6 94.582s120.149-38.387 145.194-93.581l0.406-1.001h502.4c35.346 0 64-28.654 64-64s-28.654-64-64-64v0z',
  'home': 'M1011.208 434.928l-495.69-434.928h-3.838c-0.571-0.209-1.231-0.329-1.919-0.329s-1.347 0.121-1.959 0.342l0.040-0.013-495.69 434.928c-7.219 6.761-11.818 16.244-12.151 26.803l-0.001 0.060c0.026 9.295 3.408 17.796 8.999 24.358l-0.044-0.053c6.78 6.559 16.030 10.6 26.224 10.6s19.444-4.042 26.234-10.61l-0.010 0.010 24.944-21.746v544.939c0.331 6.574 5.578 11.821 12.122 12.151l0.030 0.001h319.8c6.574-0.331 11.821-5.578 12.151-12.122l0.001-0.030v-327.475h161.819v330.034c0.331 6.574 5.578 11.821 12.122 12.151l0.030 0.001h319.8c6.574-0.331 11.821-5.578 12.151-12.122l0.001-0.030v-544.939l24.944 21.746c6.724 7.782 16.607 12.676 27.633 12.676 20.135 0 36.457-16.322 36.457-36.457 0-1.085-0.047-2.159-0.14-3.22l0.010 0.138c-0.856-10.877-6.128-20.376-14.002-26.809l-0.069-0.055zM862.821 940.212c0 6.712-5.441 12.152-12.152 12.152v0h-172.692c-6.574-0.331-11.821-5.578-12.151-12.122l-0.001-0.030v-271.191c-2.083-33.634-29.871-60.123-63.845-60.123-0.041 0-0.081 0-0.121 0h-182.92c-0.034 0-0.075 0-0.115 0-33.974 0-61.761 26.489-63.836 59.94l-0.009 0.182v271.191c-0.331 6.574-5.578 11.821-12.122 12.151l-0.030 0.001h-170.134c-6.712 0-12.152-5.441-12.152-12.152v0-537.904l351.141-307.008 351.141 307.008z',
  'die': 'M656 250.24c0.363 53.45 43.777 96.64 97.278 96.64 53.726 0 97.28-43.554 97.28-97.28s-43.552-97.279-97.278-97.28v0c-0.001 0-0.001 0-0.002 0-53.726 0-97.28 43.554-97.28 97.28 0 0.225 0.001 0.45 0.002 0.675v-0.035zM609.28 512c0-53.726-43.554-97.28-97.28-97.28s-97.28 43.554-97.28 97.28c0 53.726 43.554 97.28 97.28 97.28v0c53.581-0.36 96.92-43.699 97.28-97.246v-0.034zM368 773.76c0 53.726-43.554 97.28-97.28 97.28s-97.28-43.554-97.28-97.28c0-53.726 43.554-97.28 97.28-97.28s97.28 43.554 97.28 97.28zM270.72 347.52c0.189 0.001 0.414 0.002 0.638 0.002 54.080 0 97.92-43.84 97.92-97.92s-43.84-97.92-97.92-97.92c-54.080 0-97.92 43.84-97.92 97.92 0 0.224 0.001 0.448 0.002 0.672v-0.034c0 53.726 43.554 97.28 97.28 97.28v0zM753.28 676.48c-0.189-0.001-0.414-0.002-0.638-0.002-54.080 0-97.92 43.84-97.92 97.92s43.84 97.92 97.92 97.92c54.080 0 97.92-43.84 97.92-97.92 0-0.224-0.001-0.448-0.002-0.672v0.034c0-53.726-43.554-97.28-97.28-97.28v0zM940.8 83.2v857.6h-857.6v-857.6h857.6zM964.48 0h-904.96c-32.872 0-59.52 26.648-59.52 59.52v0 904.96c0 32.872 26.648 59.52 59.52 59.52h904.96c32.872 0 59.52-26.648 59.52-59.52v0-904.96c0-32.872-26.648-59.52-59.52-59.52v0z',
  'user': 'M512 521.6c0.19 0 0.415 0.001 0.64 0.001 144.213 0 261.12-116.907 261.12-261.12s-116.907-261.12-261.12-261.12c-144.212 0-261.12 116.907-261.12 261.12v0c0 0 0 0 0 0.001 0 143.987 116.543 260.755 260.445 261.119h0.035zM512 81.92c98.969 0.001 179.199 80.231 179.199 179.2s-80.231 179.2-179.2 179.2c-98.969 0-179.2-80.231-179.2-179.2 0-0.225 0-0.45 0.001-0.675v0.035c0.364-98.694 80.454-178.56 179.199-178.56 0 0 0.001 0 0.001 0v0zM512 565.12c-287.36 0-512 142.080-512 323.84v94.080c0 22.622 18.338 40.96 40.96 40.96h942.080c22.622 0 40.96-18.338 40.96-40.96v0-94.080c0-181.76-224.64-323.84-512-323.84zM512 647.040c232.96 0 430.080 110.72 430.080 241.92v53.12h-860.16v-53.12c0-131.2 197.12-241.92 430.080-241.92z',
  'heart': 'M768 415.264c-123.712 0-224 101.056-224 225.76 0 71.040 32.64 134.304 83.488 175.712-65.792 48.8-115.488 79.616-115.488 79.616s-448-276.864-448-499.904c0-134.4 82.656-268.768 240-268.768 144 0 208 137.472 208 137.472s56-137.472 208-137.472 237.312 131.68 237.312 268.768c0 30.656-8.704 62.176-22.912 93.824-40.992-45.952-100.288-75.008-166.4-75.008zM768 447.488c106.016 0 192 86.624 192 193.504s-85.984 193.536-192 193.536c-106.048 0-192-86.656-192-193.536s85.952-193.504 192-193.504zM672 673.248h64v64.512h64v-64.512h64v-64.512h-64v-64.512h-64v64.512h-64v64.512z',
  'tick': 'M0 550.4l102.4-102.4 256 256 563.2-563.2 102.4 102.4-665.6 665.6z',
  'chevron-right': 'M669.867 503.466l-256-256c-17.067-17.067-42.667-17.067-59.733 0s-17.067 42.667 0 59.733l226.133 226.133-226.133 226.133c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.533 17.067 12.8 29.867 12.8s21.333-4.267 29.867-12.8l256-256c17.067-17.067 17.067-42.667 0-59.733z',
  'chevron-left': 'M443.733 533.333l226.133-226.133c17.067-17.067 17.067-42.667 0-59.733s-42.667-17.067-59.733 0l-256 256c-17.067 17.067-17.067 42.667 0 59.733l256 256c8.533 8.533 21.333 12.8 29.867 12.8s21.333-4.267 29.867-12.8c17.067-17.067 17.067-42.667 0-59.733l-226.133-226.133z',
  'chevron-down': 'M797.867 375.466c-17.067-17.067-42.667-17.067-59.733 0l-226.133 226.133-226.133-226.133c-17.067-17.067-42.667-17.067-59.733 0s-17.067 42.667 0 59.733l256 256c8.533 8.533 21.333 12.8 29.867 12.8s21.333-4.267 29.867-12.8l256-256c17.067-17.067 17.067-42.667 0-59.733z',
  'chevron-up': 'M797.867 631.466l-256-256c-17.067-17.067-42.667-17.067-59.733 0l-256 256c-17.067 17.067-17.067 42.667 0 59.733s42.667 17.067 59.733 0l226.133-226.133 226.133 226.133c8.533 8.533 21.333 12.8 29.867 12.8s21.333-4.267 29.867-12.8c17.067-17.067 17.067-42.667 0-59.733z',
  'gift': 'M964.48 233.6h-155.52c13.369-21.545 21.775-47.43 23.028-75.179l0.012-0.341c0.117-2.293 0.184-4.979 0.184-7.68 0-88.467-71.717-160.184-160.184-160.184-85.766 0-155.789 67.404-159.985 152.129l-0.015 0.375s0 0 0 0 0 0 0 0c-8.92-79.634-75.872-140.977-157.152-140.977-87.305 0-158.080 70.775-158.080 158.080 0 26.988 6.763 52.396 18.686 74.622l-0.414-0.845h-155.52c-32.872 0-59.52 26.648-59.52 59.52v0 671.36c0 32.872 26.648 59.52 59.52 59.52h904.96c32.872 0 59.52-26.648 59.52-59.52v0-671.36c0-32.872-26.648-59.52-59.52-59.52v0zM670.080 83.2c0.189-0.002 0.413-0.003 0.637-0.003 41.709 0 75.52 33.811 75.52 75.52s-33.811 75.52-75.52 75.52c-41.709 0-75.52-33.811-75.52-75.52 0-0.224 0.001-0.448 0.003-0.672v0.034c0.359-41.21 33.67-74.521 74.846-74.88h0.034zM278.4 158.080c0-41.709 33.811-75.52 75.52-75.52s75.52 33.811 75.52 75.52c0 41.709-33.811 75.52-75.52 75.52v0c-41.709 0-75.52-33.811-75.52-75.52v0zM384 320l-72.32 91.52c-5.194 6.866-8.32 15.548-8.32 24.96 0 13.563 6.491 25.61 16.535 33.204l0.105 0.076c6.489 5.186 14.815 8.323 23.873 8.323 0.157 0 0.314-0.001 0.471-0.003h-0.024c0.002 0 0.004 0 0.006 0 13.754 0 25.995-6.476 33.842-16.544l0.072-0.096 107.52-141.44h52.48l106.88 144.64c7.918 10.164 20.16 16.64 33.914 16.64 0.002 0 0.004 0 0.006 0v0c9.835-0.672 18.557-4.952 24.952-11.512l0.008-0.008c10.388-7.655 17.053-19.842 17.053-33.586 0-9.278-3.037-17.847-8.172-24.766l0.079 0.112-72.96-91.52h300.8v295.68h-857.6v-295.68zM942.72 704v76.8h-859.52v-81.92zM83.2 940.8v-76.8h857.6v76.8z',
  'search': 'M1011.84 951.68l-267.52-267.52c56.881-70.24 91.318-160.684 91.318-259.172 0-228.337-185.103-413.44-413.44-413.44s-413.44 185.103-413.44 413.44c0 228.337 185.103 413.44 413.44 413.44 100.042 0 191.786-35.533 263.298-94.667l-0.696 0.559 267.52 267.52c7.572 7.468 17.959 12.1 29.428 12.16h0.012c11.666-0.164 22.228-4.762 30.103-12.181l-0.023 0.021c7.47-7.801 12.069-18.403 12.069-30.080s-4.599-22.279-12.084-30.096l0.015 0.016zM84.48 419.2c0-184.86 149.859-334.719 334.72-334.719s334.72 149.859 334.72 334.72c0 184.636-149.494 334.355-334.045 334.719h-0.035c-0.19 0-0.415 0.001-0.64 0.001-184.861 0-334.72-149.859-334.72-334.72 0 0 0 0 0-0.001v0z',
  'help-outline': 'M554.24 609.92h-113.92v-33.92c0-95.36 107.52-116.48 107.52-172.16 0.007-0.285 0.011-0.621 0.011-0.958 0-22.975-18.625-41.6-41.6-41.6-1.809 0-3.59 0.115-5.338 0.339l0.207-0.022c-24.666 0.425-45.477 16.464-53.002 38.639l-0.118 0.401-92.16-41.6c20.061-60.665 76.254-103.665 142.49-103.665 4.813 0 9.573 0.227 14.27 0.671l-0.6-0.046c4.622-0.529 9.979-0.83 15.406-0.83 77.892 0 141.275 62.121 143.31 139.522l0.004 0.188c0 101.12-113.92 123.52-113.92 187.52zM426.24 698.24c-0.002-0.19-0.003-0.415-0.003-0.64 0-38.527 31.233-69.76 69.76-69.76 0.001 0 0.002 0 0.003 0v0c0.19-0.002 0.415-0.003 0.64-0.003 38.881 0 70.4 31.519 70.4 70.4s-31.519 70.4-70.4 70.4c-38.88 0-70.398-31.517-70.4-70.397v0zM512 83.2c236.82 0 428.8 191.98 428.8 428.8s-191.98 428.8-428.8 428.8c-236.82 0-428.8-191.98-428.8-428.8v0c0.364-236.673 192.126-428.436 428.764-428.8h0.036zM512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512c282.77 0 512-229.23 512-512v0c0-282.77-229.23-512-512-512v0z',
  'exit': 'M1260.308 512c-0.181 18.032-7.892 35.167-21.268 47.262l-236.308 236.308c-11.827 12.066-28.003 18.877-44.898 18.905-16.843-0.282-32.927-7.054-44.898-18.905-12.121-12.114-18.932-28.549-18.932-45.686s6.81-33.572 18.932-45.686l128.394-128.394h-639.606c-35.237 0-63.803-28.566-63.803-63.803s28.566-63.803 63.803-63.803h638.031l-126.031-126.031c-12.523-11.897-19.614-28.413-19.614-45.686s7.091-33.789 19.614-45.686c12.114-12.121 28.549-18.932 45.686-18.932s33.572 6.81 45.686 18.932l236.308 236.308c12.466 11.55 19.354 27.91 18.905 44.898zM236.308 127.606c-59.2 1.667-106.677 49.491-107.914 108.702v551.385c0.429 59.421 48.493 107.485 107.914 107.914h406.449c24.633-2.733 48.658 8.871 61.832 29.864s13.174 47.673 0 68.666c-13.174 20.993-37.199 32.597-61.832 29.864h-406.449c-130.509 0-236.308-105.799-236.308-236.308v-551.385c0-130.509 105.799-236.308 236.308-236.308h406.449c17.266-0.422 33.982 6.088 46.415 18.076s19.546 28.457 19.751 45.727c-0.205 17.27-7.319 33.738-19.751 45.727s-29.149 18.499-46.415 18.076h-406.449z',
  'facebookWhite': 'M208.893 208.448c80.8-80.8 188.224-125.312 302.528-125.312 114.272 0 221.728 44.512 302.528 125.312 80.8 80.768 125.312 188.224 125.312 302.528 0 114.272-44.512 221.728-125.312 302.528s-188.256 125.312-302.528 125.312c-114.304 0-221.728-44.512-302.528-125.312s-125.312-188.256-125.312-302.528c0-114.304 44.512-221.76 125.312-302.528zM1008.541 392.128c-21.6-91.040-67.968-174.624-135.808-242.464-96.512-96.544-224.832-149.664-361.312-149.664s-264.8 53.12-361.312 149.664c-67.84 67.808-114.208 151.392-135.808 242.432-9.312 38.624-14.304 78.976-14.304 120.48 0 282.432 228.96 511.424 511.424 511.424 282.432 0 511.424-228.992 511.424-511.424 0-41.472-4.992-81.824-14.304-120.448zM443.968 813.568h96.992v-295.2h97.408l15.392-97.792h-112.8v-49.056c0-25.504 8.352-49.888 44.992-49.888h73.248v-97.632h-103.968c-87.392 0-111.264 57.568-111.264 137.344v59.2h-59.968v97.824h59.968v295.2z',
  'instagramWhite': 'M891.306 708.173c0 118.624-96.512 215.136-215.136 215.136h-368.832c-118.624 0-215.136-96.512-215.136-215.136v-368.8c0-118.656 96.512-215.168 215.136-215.168h368.832c118.624 0 215.136 96.512 215.136 215.168v368.8zM676.17 31.981h-368.832c-169.696 0-307.36 137.664-307.36 307.392v368.8c0 169.728 137.664 307.328 307.36 307.328h368.832c169.728 0 307.328-137.6 307.328-307.328v-368.8c0-169.728-137.6-307.392-307.328-307.392zM491.76 677.424c-84.704 0-153.664-68.96-153.664-153.664 0-84.768 68.96-153.664 153.664-153.664s153.664 68.896 153.664 153.664c0 84.704-68.96 153.664-153.664 153.664zM491.76 277.904c-135.808 0-245.888 110.048-245.888 245.856 0 135.776 110.080 245.888 245.888 245.888 135.776 0 245.888-110.112 245.888-245.888 0-135.808-110.112-245.856-245.888-245.856zM756.074 226.672c18.080 0 32.768 14.656 32.768 32.736 0 18.112-14.688 32.8-32.768 32.8s-32.768-14.688-32.768-32.8c0-18.080 14.688-32.736 32.768-32.736z',
  'twitterWhite': 'M761.136 294.822c-21.024 12.736-44.256 21.856-68.992 26.592-19.776-22.528-48.032-36.864-79.296-37.408-60-0.992-108.64 49.696-108.64 113.216 0 9.024 0.928 17.824 2.816 26.272-90.336-5.824-170.4-52.864-223.968-123.776-9.344 17.024-14.688 36.864-14.688 58.144 0 40.224 19.168 76 48.288 97.088-17.824-0.8-34.528-6.208-49.216-15.072v1.472c0 56.256 37.472 103.392 87.2 114.368-9.12 2.592-18.752 3.904-28.64 3.872-7.008-0.032-13.792-0.8-20.416-2.208 13.824 46.080 53.952 79.744 101.504 80.832-37.216 30.848-84.064 49.28-134.944 49.184-8.768 0-17.44-0.608-25.92-1.664 48.096 32.96 105.184 52.224 166.56 52.224 199.776 0.032 309.056-173.888 309.056-324.768 0-4.96-0.096-9.856-0.32-14.752 21.248-15.84 39.648-35.616 54.24-58.304-19.488 8.768-40.416 14.624-62.432 17.088 22.464-13.792 39.68-35.904 47.808-62.4zM938.81 510.979c0 114.272-44.512 221.728-125.312 302.528s-188.256 125.312-302.528 125.312c-114.272 0-221.728-44.512-302.528-125.312-80.832-80.8-125.312-188.256-125.312-302.528 0-114.304 44.48-221.76 125.312-302.528 80.8-80.8 188.256-125.312 302.528-125.312s221.728 44.512 302.528 125.312c80.8 80.768 125.312 188.224 125.312 302.528zM872.25 149.667c-96.48-96.544-224.8-149.664-361.28-149.664s-264.8 53.12-361.312 149.664c-96.512 96.512-149.664 224.8-149.664 361.312 0 136.48 53.152 264.768 149.664 361.28 96.512 96.544 224.832 149.664 361.312 149.664s264.8-53.12 361.28-149.664c96.544-96.512 149.696-224.8 149.696-361.28 0-136.512-53.152-264.8-149.696-361.312z',
  'youtube': 'M543.918 683.092l329.449-170.387-329.449-172.715zM227.325 898.454c-66.001-3.631-115.402-53.869-122.88-125.021-17.998-170.915-17.998-343.412 0-512.714 7.478-70.625 57.003-120.863 123.252-125.021 145.129-9.123 293.205-13.715 440.072-13.715 147.332 0 297.705 4.592 446.992 13.715 65.908 4.003 115.402 54.334 123.221 125.207 17.967 163.312 17.936 335.779-0.062 512.714-7.075 69.88-56.785 120.087-123.656 124.897-127.1 9.061-265.681 13.653-411.896 13.653-146.246 0-306.083-4.592-475.043-13.715zM1328.435 250.976c-12.847-116.519-96.504-199.308-208.12-206.103-302.545-18.463-604.781-18.463-898.296 0-110.375 6.951-195.894 91.757-208.027 206.289-18.68 175.632-18.68 354.552 0 531.766 12.164 115.433 97.839 200.301 208.431 206.383 170.543 9.185 332.024 13.84 479.977 13.84 148.356 0 289.14-4.686 418.382-13.902 112.516-8.099 195.987-91.043 207.686-206.476 18.618-183.172 18.618-362.093-0.031-531.797z',
  'info': 'M461.538 358.154v-103.385h100.923v103.385h-100.923zM512 923.077c73.847 0 142.769-18.872 206.769-56.615 62.359-36.103 111.59-85.333 147.692-147.692 37.744-64 56.615-132.923 56.615-206.769s-18.872-142.769-56.615-206.769c-36.103-62.359-85.333-111.59-147.692-147.692-64-37.744-132.923-56.615-206.769-56.615s-142.769 18.872-206.769 56.615c-62.359 36.103-111.59 85.333-147.692 147.692-37.744 64-56.615 132.923-56.615 206.769s18.872 142.769 56.615 206.769c36.103 62.359 85.333 111.59 147.692 147.692 64 37.744 132.923 56.615 206.769 56.615zM512 0c93.539 0 180.102 23.384 259.692 70.154 77.129 44.308 137.846 105.025 182.154 182.154 46.769 79.59 70.154 166.153 70.154 259.692s-23.384 180.102-70.154 259.692c-44.308 77.129-105.025 137.846-182.154 182.154-79.59 46.769-166.153 70.154-259.692 70.154s-180.102-23.384-259.692-70.154c-77.129-45.128-137.846-106.256-182.154-183.385-46.769-79.59-70.154-165.743-70.154-258.462s23.384-178.871 70.154-258.462c45.128-77.129 106.256-138.256 183.385-183.385 79.59-46.769 165.743-70.154 258.462-70.154zM461.538 769.231v-307.692h100.923v307.692h-100.923z',
  'remove': 'M512 0c282.77 0 512 229.23 512 512s-229.23 512-512 512c-282.77 0-512-229.23-512-512s229.23-512 512-512zM692.48 532.48v-52.48h-372.48v52.48h372.48z',
  'add': 'M512 0c282.77 0 512 229.23 512 512s-229.23 512-512 512c-282.77 0-512-229.23-512-512s229.23-512 512-512zM692.48 532.48v-52.48h-160v-160h-52.48v160h-160v52.48h160v160h52.48v-160h160z',
  'all-games': 'M142.153 319.856c22.588 0 40.9 18.312 40.9 40.899 0 22.57-18.312 40.899-40.9 40.899-22.606 0-40.882-18.33-40.882-40.899 0-22.587 18.277-40.899 40.882-40.899zM360.762 319.856c22.57 0 40.865 18.312 40.865 40.899 0 22.57-18.295 40.899-40.865 40.899-22.606 0-40.9-18.33-40.9-40.899 0-22.587 18.295-40.899 40.9-40.899zM251.458 210.554c22.57 0 40.9 18.33 40.9 40.917s-18.33 40.882-40.9 40.882c-22.606 0-40.9-18.294-40.9-40.882s18.295-40.917 40.9-40.917zM142.153 101.251c22.588 0 40.9 18.294 40.9 40.882 0 22.605-18.312 40.899-40.9 40.899-22.606 0-40.882-18.294-40.882-40.899 0-22.587 18.277-40.882 40.882-40.882zM360.762 101.269c22.57 0 40.865 18.294 40.865 40.864 0 22.605-18.295 40.899-40.865 40.899-22.606 0-40.9-18.294-40.9-40.899 0-22.57 18.295-40.864 40.9-40.864zM74.978 39.385c-19.631 0-35.592 15.961-35.592 35.591v352.971c0 19.63 15.961 35.591 35.592 35.591h352.978c19.613 0 35.574-15.961 35.574-35.591v-352.971c0-19.63-15.961-35.591-35.574-35.591h-352.978zM427.955 502.924h-352.978c-41.345 0-74.978-33.632-74.978-74.976v-352.971c0-41.345 33.632-74.976 74.978-74.976h352.978c41.345 0 74.96 33.632 74.96 74.976v352.971c0 41.345-33.614 74.976-74.96 74.976zM670.506 825.114c15.997-15.979 41.898-15.979 57.859 0 15.961 15.961 15.961 41.861 0 57.804-15.961 15.996-41.862 15.996-57.859 0-15.961-15.961-15.961-41.844 0-57.804zM825.093 670.53c15.979-15.979 41.88-15.979 57.841 0 15.961 15.961 15.961 41.861 0 57.822-15.979 15.961-41.862 15.961-57.841 0s-15.979-41.879 0-57.822zM515.955 670.53c15.961-15.979 41.844-15.979 57.805 0 15.979 15.961 15.979 41.861 0 57.822-15.961 15.961-41.844 15.961-57.805 0-15.979-15.961-15.979-41.879 0-57.822zM670.506 515.946c15.997-15.996 41.898-15.996 57.859 0 15.979 15.961 15.979 41.844 0 57.822-15.961 15.979-41.862 15.979-57.859 0-15.961-15.979-15.961-41.861 0-57.822zM699.435 414.267c-9.512 0-18.437 3.705-25.153 10.421l-249.605 249.601c-6.716 6.716-10.421 15.64-10.421 25.152s3.705 18.437 10.421 25.17l249.605 249.601c13.431 13.413 36.874 13.431 50.341-0.018l249.569-249.583c6.716-6.733 10.421-15.658 10.421-25.17s-3.705-18.455-10.421-25.17l-249.587-249.583c-6.716-6.716-15.658-10.421-25.171-10.421zM699.435 1024c-20.023 0-38.852-7.784-52.996-21.946l-249.623-249.601c-14.162-14.162-21.946-32.99-21.946-53.013s7.802-38.851 21.964-52.995l249.605-249.618c14.144-14.162 32.973-21.946 52.996-21.946s38.852 7.784 53.013 21.946l249.587 249.601c14.162 14.144 21.964 32.99 21.964 53.013s-7.802 38.851-21.964 53.013l-249.569 249.601c-14.18 14.162-33.009 21.946-53.031 21.946z',
  'slots-games': 'M141.485 829.724c73.501-90.511 91.204-217.736 97.052-419.814 0-153.821 122.629-278.962 273.385-278.962 150.703 0 273.332 125.141 273.332 279.55 5.831 201.544 23.534 328.715 97.052 419.226h-740.822zM511.904 984.614c-65.732 0-119.993-50.537-127.692-115.504h255.367c-7.699 64.966-61.978 115.504-127.675 115.504zM402.439 41.844c0-1.372 1.048-2.458 2.357-2.458h214.165c1.309 0 2.357 1.087 2.357 2.458v69.972c-34.062-13.057-70.917-20.254-109.396-20.254-38.496 0-75.404 7.215-109.483 20.272v-69.99zM938.925 833.234c-89.231-82.727-108.802-207.957-115.087-423.324 0-120.901-66.378-226.287-163.902-280.155v-87.91c0-23.069-18.384-41.844-40.975-41.844h-214.165c-22.574 0-40.975 18.776-40.975 41.844v87.928c-97.524 53.833-163.884 159.076-163.884 279.55-6.285 217.255-26.083 342.699-116.693 425.408-5.971 5.451-8.031 14.073-5.168 21.715 2.863 7.624 10.021 12.666 18.017 12.666h249.274c7.839 86.735 79.489 154.89 166.538 154.89 87.031 0 158.664-68.155 166.503-154.89h249.484c10.685 0 19.309-8.818 19.309-19.702 0-6.698-3.282-12.612-8.275-16.175z',
  'live-games': 'M533.571 608.718l82.771 47.797v-95.595l-82.771 47.797zM462.598 608.718l-82.771-47.797v95.595l82.771-47.797zM239.773 527.97v405.668h516.622v-405.668l-155.799-51.762-84.215 101.453 108.836-62.836c5.489-3.178 12.246-3.178 17.735 0s8.876 9.036 8.876 15.36v157.067c0 6.324-3.387 12.182-8.876 15.36-2.745 1.573-5.81 2.375-8.876 2.375s-6.115-0.803-8.86-2.375l-127.133-73.413-127.133 73.413c-2.745 1.573-5.794 2.375-8.876 2.375-3.050 0-6.115-0.803-8.86-2.375-5.489-3.178-8.876-9.036-8.876-15.36v-157.067c0-6.324 3.387-12.182 8.876-15.36s12.23-3.178 17.735 0l108.836 62.836-84.215-101.453-155.799 51.762zM978.418 933.718c9.807 0 17.735 7.929 17.735 17.751 0 9.791-7.929 17.719-17.735 17.719h-960.682c-9.807 0-17.735-7.929-17.735-17.719 0-9.823 7.929-17.751 17.735-17.751h186.535v-418.556c0-7.64 4.911-14.429 12.15-16.837l179.473-59.61c6.918-2.279 14.557-0.128 19.244 5.505l82.947 99.928 82.947-99.928c4.671-5.634 12.343-7.784 19.228-5.505l179.473 59.61c7.255 2.408 12.15 9.197 12.15 16.837v418.556h186.535zM498.085 402.41c-98.115 0-177.948-79.801-177.948-177.9 0-98.147 79.833-177.964 177.948-177.964s177.932 79.817 177.932 177.964c0 98.099-79.817 177.9-177.932 177.9zM498.085 82.032c-78.549 0-142.461 63.912-142.461 142.477 0 78.533 63.912 142.429 142.461 142.429 78.566 0 142.445-63.896 142.445-142.429 0-78.566-63.88-142.477-142.445-142.477z',
  'table-games': 'M649.227 172.337c-18.414-7.627-27.171-28.743-19.544-47.157 7.645-18.432 28.743-27.171 47.175-19.544 18.414 7.627 27.171 28.76 19.544 47.175s-28.76 27.171-47.175 19.527zM364.078 860.748c18.414 7.645 27.154 28.743 19.527 47.175-7.627 18.414-28.743 27.154-47.175 19.544-18.414-7.627-27.154-28.743-19.544-47.175 7.627-18.414 28.76-27.171 47.192-19.544zM898.641 387.236c-18.414 7.627-39.53-1.112-47.175-19.544-7.627-18.414 1.13-39.53 19.544-47.139 18.414-7.645 39.53 1.095 47.175 19.509 7.627 18.432-1.112 39.548-19.544 47.175zM115.899 633.314c18.432-7.627 39.548 1.112 47.175 19.544 7.627 18.414-1.112 39.53-19.527 47.175-18.432 7.609-39.53-1.13-47.175-19.562-7.627-18.414 1.112-39.53 19.527-47.157zM900.107 633.455c18.414 7.645 27.154 28.76 19.527 47.175-7.627 18.432-28.743 27.171-47.157 19.527-18.432-7.609-27.189-28.725-19.544-47.139 7.627-18.432 28.743-27.171 47.175-19.562zM117.382 387.43c-18.414-7.645-27.171-28.76-19.527-47.175 7.627-18.414 28.743-27.171 47.157-19.544 18.432 7.645 27.171 28.743 19.544 47.175-7.627 18.397-28.743 27.154-47.175 19.544zM653.711 850.137c18.414-7.645 39.53 1.112 47.175 19.527 7.609 18.432-1.13 39.53-19.562 47.175-18.414 7.627-39.53-1.13-47.175-19.544-7.609-18.414 1.13-39.548 19.562-47.157zM368.58 161.762c-18.432 7.645-39.548-1.112-47.175-19.527s1.13-39.548 19.527-47.175c18.432-7.627 39.548 1.13 47.175 19.527 7.627 18.432-1.112 39.565-19.527 47.175zM822.141 249.208c-14.106 14.106-36.952 14.106-51.059 0-14.089-14.071-14.089-36.935 0-51.041 14.106-14.089 36.952-14.089 51.059 0 14.124 14.106 14.124 36.97 0 51.041zM193.141 776.127c14.089-14.106 36.952-14.106 51.059 0 14.089 14.106 14.089 36.952 0 51.059-14.106 14.106-36.97 14.124-51.059 0-14.106-14.089-14.106-36.952 0-51.059zM916.137 472.652c19.95 0 36.105 16.154 36.122 36.105 0 19.95-16.172 36.105-36.122 36.105s-36.105-16.154-36.105-36.105c0-19.95 16.154-36.105 36.105-36.105zM134.896 508.774c0 19.933-16.154 36.087-36.087 36.087-19.95 0-36.122-16.154-36.122-36.087s16.172-36.105 36.122-36.105c19.933 0 36.087 16.154 36.087 36.105zM774.878 770.883c14.089-14.089 36.952-14.089 51.059 0 14.106 14.106 14.106 36.97 0 51.076-14.106 14.089-36.97 14.089-51.059 0-14.106-14.106-14.106-36.97 0-51.076zM247.995 244.035c-14.089 14.071-36.952 14.071-51.059 0-14.089-14.106-14.089-36.97 0-51.076 14.106-14.089 36.97-14.089 51.059 0 14.106 14.106 14.106 36.97 0 51.076zM475.323 916.115c0-19.95 16.172-36.105 36.105-36.105 19.95 0 36.105 16.154 36.105 36.105 0 19.933-16.154 36.105-36.105 36.105-19.933 0-36.105-16.172-36.105-36.105zM475.323 98.804c0-19.95 16.172-36.105 36.105-36.105 19.95 0 36.105 16.154 36.105 36.105s-16.154 36.105-36.105 36.105c-19.933 0-36.105-16.154-36.105-36.105zM620.961 446.452c33.651 0 60.999 27.366 60.999 60.999 0 33.651-27.348 61.016-60.999 61.016-30.102 0-55.031-21.963-59.975-50.653h-33.986v45.603c24.029 8.192 41.49 30.755 41.49 57.521 0 33.651-27.383 61.016-61.016 61.016-33.651 0-61.016-27.366-61.016-61.016 0-26.765 17.443-49.329 41.49-57.521v-45.603h-33.986c-4.943 28.707-29.873 50.653-59.992 50.653-16.278 0-31.603-6.356-43.114-17.867-11.529-11.546-17.885-26.854-17.885-43.167 0-33.615 27.383-60.981 61.016-60.981 23.234 0 43.238 13.188 53.548 32.327h40.413v-27.295c-24.046-8.192-41.49-30.755-41.49-57.521 0-33.651 27.366-60.999 61.016-60.999 33.633 0 61.016 27.348 61.016 60.999 0 26.765-17.461 49.329-41.49 57.521v27.295h40.413c10.311-19.138 30.314-32.327 53.548-32.327zM507.473 371.982c-12.129 0-21.981 9.852-21.981 21.981 0 12.111 9.852 21.981 21.981 21.981s21.981-9.869 21.981-21.981c0-12.129-9.852-21.981-21.981-21.981zM393.968 529.449c12.129 0 21.998-9.869 21.998-21.998 0-12.111-9.852-21.963-21.981-21.963-12.111 0-21.963 9.852-21.963 21.963-0.018 5.879 2.278 11.405 6.426 15.537 4.149 4.167 9.657 6.462 15.519 6.462zM507.473 642.918c12.129 0 21.981-9.852 21.981-21.981 0-12.111-9.852-21.981-21.981-21.981s-21.981 9.869-21.981 21.981c0 12.129 9.852 21.981 21.981 21.981zM620.961 529.431c12.094 0 21.981-9.869 21.981-21.981s-9.887-21.963-21.981-21.963c-12.129 0-21.981 9.852-21.981 21.963s9.852 21.981 21.981 21.981zM507.473 817.299c170.849 0 309.848-138.999 309.848-309.848 0-170.831-138.999-309.831-309.848-309.831s-309.848 138.999-309.848 309.831c0 170.849 138.999 309.848 309.848 309.848zM507.473 158.584c192.371 0 348.884 156.495 348.884 348.866s-156.513 348.884-348.884 348.884c-192.371 0-348.902-156.513-348.902-348.884s156.531-348.866 348.902-348.866zM507.473 975.895c258.313 0 468.427-210.167 468.427-468.445s-210.114-468.427-468.427-468.427c-258.295 0-468.427 210.15-468.427 468.427s210.132 468.445 468.427 468.445zM507.473-0.012c279.817 0 507.48 227.646 507.48 507.463s-227.663 507.48-507.48 507.48c-279.817 0-507.463-227.663-507.463-507.48s227.646-507.463 507.463-507.463z',
  'jackpot-games': 'M579.187 523.976c-9.11-22.457-34.004-39.23-63.823-44.791v132.255c59.215 12.994 98.463 55.631 98.163 109.868-0.282 50.935-41.613 94.155-98.163 108.721v19.933c0 10.787-8.739 19.509-19.527 19.509-10.77 0-19.509-8.722-19.509-19.509v-14.795l-2.825 0.124c-77.188 0-140.006-51.182-140.006-114.088 0-4.767 0.353-9.587 1.077-14.336 1.554-10.664 11.458-18.026 22.157-16.437 10.664 1.589 18.026 11.494 16.437 22.175-0.424 2.913-0.636 5.72-0.636 8.598 0 41.384 45.286 75.052 100.97 75.052l2.825-0.106v-150.369c-63.965-6.568-109.78-49.17-109.78-103.371 0-52.595 47.846-96.097 109.78-103.265v-15.819c0-10.787 8.739-19.527 19.509-19.527 10.787 0 19.527 8.739 19.527 19.527v16.137c46.151 6.25 84.939 32.75 99.999 69.862 4.043 9.975-0.759 21.363-10.752 25.406-9.993 4.061-21.38-0.759-25.423-10.752zM405.601 542.408c0 33.068 28.654 58.615 70.727 64.212v-128.247c-40.307 6.126-70.727 32.503-70.727 64.035zM574.49 721.078c0.177-32.98-22.705-58.845-59.127-69.473v137.746c34.675-11.9 58.968-37.994 59.127-68.273zM803.566 929.55v-372.577c0-168.448-137.039-305.487-305.47-305.487s-305.487 138.593-305.487 308.93v369.134c0 25.547 20.798 46.345 46.362 46.345h518.232c25.565 0 46.362-20.798 46.362-46.345zM606.641 39.023h-217.070l108.526 158.42 108.544-158.42zM533.884 214.321c173.197 17.955 308.701 164.758 308.701 342.652v372.577c0 47.069-38.294 85.38-85.38 85.38h-518.232c-47.086 0-85.363-38.312-85.363-85.38v-369.134c0-179.659 135.521-327.962 308.754-346.077l-125.934-183.79c-4.078-5.967-4.537-13.736-1.148-20.127 3.354-6.409 10.010-10.434 17.249-10.434h291.116c7.256 0 13.895 4.025 17.284 10.434 3.354 6.391 2.913 14.142-1.183 20.127l-125.864 183.773z',
  'wallet': 'M856.755 732.275c-65.172 0-118.241-53.984-118.241-120.352v-199.872c0-66.336 53.068-120.32 118.241-120.32h308.067c1.855 0 3.71 0.032 5.565 0.128v-199.072c0-51.232-40.807-92.8-91.14-92.8h-988.084c-50.365 0-91.172 41.536-91.172 92.8v838.432c0 51.232 40.807 92.768 91.172 92.768h988.084c50.333 0 91.14-41.536 91.14-92.768v-199.104c-1.855 0.096-3.71 0.16-5.565 0.16h-308.067zM974.784 583.708c-43.801 0-79.327-34.032-79.327-75.99 0-41.99 35.526-75.99 79.327-75.99s79.327 34.001 79.327 75.99c0 41.959-35.526 75.99-79.327 75.99zM1182.38 358.4h-316.759c-30.321 0-54.954 23.534-54.954 52.611v193.413c0 29.046 24.632 52.642 54.954 52.642h316.759c30.354 0 54.954-23.596 54.954-52.642v-193.413c0-29.077-24.6-52.611-54.954-52.611z',
  'caret-up': 'M298 619.333l214-214 214 214h-428z',
  'caret-down': 'M298 447.333h428l-214 214z',
  'comments': 'M769.231 512c0 13.949-5.128 25.846-15.385 35.692s-22.769 14.769-37.538 14.769h-512l-204.308 206.769v-718.769c0-13.949 4.923-25.846 14.769-35.692s21.744-14.769 35.692-14.769h665.846c14.769 0 27.282 4.923 37.538 14.769s15.385 21.744 15.385 35.692v461.538zM973.538 204.308c13.949 0 25.846 4.923 35.692 14.769s14.769 21.744 14.769 35.692v769.231l-204.308-204.308h-564.923c-13.949 0-25.846-4.923-35.692-14.769s-14.769-21.744-14.769-35.692v-103.385h665.846v-461.538h103.385z',
  'help': 'M668.308 473.846c14.769-15.59 26.461-33.231 35.077-52.923s12.923-40.615 12.923-62.769c0-36.923-9.231-70.974-27.692-102.154s-43.282-56-74.462-74.462c-31.18-18.462-65.231-27.692-102.154-27.692s-70.974 9.231-102.154 27.692c-31.18 18.462-56 43.282-74.462 74.462s-27.692 65.231-27.692 102.154h100.923c0-27.898 10.256-52.102 30.769-72.615s44.718-30.769 72.615-30.769c27.898 0 52.102 10.256 72.615 30.769s30.769 44.308 30.769 71.385c0 27.077-10.256 51.692-30.769 73.846l-62.769 64c-18.872 20.513-33.231 42.667-43.077 66.462-11.487 25.436-17.231 51.282-17.231 77.538v27.077h100.923c0-35.282 5.744-64.41 17.231-87.385 7.385-14.769 21.743-33.641 43.077-56.615l45.538-48zM562.462 870.154v-100.923h-100.923v100.923h100.923zM512 0c93.539 0 180.102 23.384 259.692 70.154 77.129 44.308 137.846 105.025 182.154 182.154 46.769 79.59 70.154 166.153 70.154 259.692s-23.384 180.102-70.154 259.692c-44.308 77.129-105.025 137.846-182.154 182.154-79.59 46.769-166.153 70.154-259.692 70.154s-180.102-23.384-259.692-70.154c-77.129-45.128-137.846-106.256-182.154-183.385-46.769-79.59-70.154-165.743-70.154-258.462s23.384-178.871 70.154-258.462c45.128-77.129 106.256-138.256 183.385-183.385 79.59-46.769 165.743-70.154 258.462-70.154z',
  'mail': 'M1102.718 247.009v-123.504l-491.077 307.291-491.077-307.291v123.504l491.077 304.35 491.077-304.35zM1102.718 0c33.327 0 61.752 12.252 85.277 36.757s35.287 53.42 35.287 86.747v735.145c0 33.327-11.762 62.242-35.287 86.747s-51.95 36.757-85.277 36.757h-982.154c-33.327 0-61.752-12.252-85.277-36.757s-35.287-53.42-35.287-86.747v-735.145c0-33.327 11.762-62.242 35.287-86.747s51.95-36.757 85.277-36.757h982.154z',
  'arrow-left-alt': 'M402.746 82.746l-320 320c-24.994 24.992-24.994 65.516 0 90.51l320 320c24.994 24.992 65.516 24.992 90.51 0 24.994-24.994 24.994-65.516 0-90.51l-210.746-210.746h613.49c35.346 0 64-28.654 64-64s-28.654-64-64-64h-613.49l210.746-210.746c12.496-12.496 18.744-28.876 18.744-45.254s-6.248-32.758-18.744-45.254c-24.994-24.994-65.516-24.994-90.51 0z',
  'arrow-right-alt': 'M621.254 82.746l320 320c24.994 24.992 24.994 65.516 0 90.51l-320 320c-24.994 24.992-65.516 24.992-90.51 0-24.994-24.994-24.994-65.516 0-90.51l210.746-210.746h-613.49c-35.346 0-64-28.654-64-64s28.654-64 64-64h613.49l-210.746-210.746c-12.496-12.496-18.744-28.876-18.744-45.254s6.248-32.758 18.744-45.254c24.994-24.994 65.516-24.994 90.51 0z',
  'linkdin': {
    'path1': "M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490C990,229.4,770.6,10,500,10z M500,913.4C271.7,913.4,86.6,728.3,86.6,500S271.7,86.6,500,86.6S913.4,271.7,913.4,500S728.3,913.4,500,913.4z",
    'path2': "M255.2,744.8h91.9V377.3h-91.9V744.8z M622.7,377.3c-78.7,1.3-117.4,58.6-122.5,61.3v-61.3h-91.9v367.5h91.9V530.4c0-7.9,19.4-70.8,91.9-61.3c38.9,2.5,59.9,54,61.3,61.3v214.4l91.5,0.4V490.8C741.6,454.1,723.2,378.6,622.7,377.3z M301.1,254.8c-25.4,0-45.9,20.5-45.9,45.9c0,25.4,20.6,45.9,45.9,45.9s45.9-20.5,45.9-45.9C347.1,275.3,326.5,254.8,301.1,254.8z"
  }
}

export default icons
