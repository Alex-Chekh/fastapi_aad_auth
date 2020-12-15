Search.setIndex({docnames:["advanced","changelog","config","deprecations","development","index","module/fastapi_aad_auth._base","module/fastapi_aad_auth._base.authenticators","module/fastapi_aad_auth._base.authenticators.session","module/fastapi_aad_auth._base.backend","module/fastapi_aad_auth._base.provider","module/fastapi_aad_auth._base.state","module/fastapi_aad_auth._base.validators","module/fastapi_aad_auth._base.validators.base","module/fastapi_aad_auth._base.validators.session","module/fastapi_aad_auth._base.validators.token","module/fastapi_aad_auth.auth","module/fastapi_aad_auth.config","module/fastapi_aad_auth.errors","module/fastapi_aad_auth.mixins","module/fastapi_aad_auth.mixins.logging","module/fastapi_aad_auth.mixins.not_authenticated","module/fastapi_aad_auth.oauth","module/fastapi_aad_auth.oauth.aad","module/fastapi_aad_auth.oauth.state","module/fastapi_aad_auth.providers","module/fastapi_aad_auth.providers.aad","module/fastapi_aad_auth.ui","module/fastapi_aad_auth.ui.base.html","module/fastapi_aad_auth.ui.error.html","module/fastapi_aad_auth.ui.jinja","module/fastapi_aad_auth.ui.login.html","module/fastapi_aad_auth.ui.user.html","module/fastapi_aad_auth.utilities","module/fastapi_aad_auth.utilities.logging","module/fastapi_aad_auth.utilities.urls","usage"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["advanced.rst","changelog.rst","config.rst","deprecations.rst","development.rst","index.rst","module\\fastapi_aad_auth._base.rst","module\\fastapi_aad_auth._base.authenticators.rst","module\\fastapi_aad_auth._base.authenticators.session.rst","module\\fastapi_aad_auth._base.backend.rst","module\\fastapi_aad_auth._base.provider.rst","module\\fastapi_aad_auth._base.state.rst","module\\fastapi_aad_auth._base.validators.rst","module\\fastapi_aad_auth._base.validators.base.rst","module\\fastapi_aad_auth._base.validators.session.rst","module\\fastapi_aad_auth._base.validators.token.rst","module\\fastapi_aad_auth.auth.rst","module\\fastapi_aad_auth.config.rst","module\\fastapi_aad_auth.errors.rst","module\\fastapi_aad_auth.mixins.rst","module\\fastapi_aad_auth.mixins.logging.rst","module\\fastapi_aad_auth.mixins.not_authenticated.rst","module\\fastapi_aad_auth.oauth.rst","module\\fastapi_aad_auth.oauth.aad.rst","module\\fastapi_aad_auth.oauth.state.rst","module\\fastapi_aad_auth.providers.rst","module\\fastapi_aad_auth.providers.aad.rst","module\\fastapi_aad_auth.ui.rst","module\\fastapi_aad_auth.ui.base.html.rst","module\\fastapi_aad_auth.ui.error.html.rst","module\\fastapi_aad_auth.ui.jinja.rst","module\\fastapi_aad_auth.ui.login.html.rst","module\\fastapi_aad_auth.ui.user.html.rst","module\\fastapi_aad_auth.utilities.rst","module\\fastapi_aad_auth.utilities.logging.rst","module\\fastapi_aad_auth.utilities.urls.rst","usage.rst"],objects:{"fastapi_aad_auth._base":{authenticators:[7,0,0,"-"],backend:[9,0,0,"-"],provider:[10,0,0,"-"],state:[11,0,0,"-"],validators:[12,0,0,"-"]},"fastapi_aad_auth._base.authenticators":{session:[8,0,0,"-"]},"fastapi_aad_auth._base.authenticators.session":{SessionAuthenticator:[8,1,1,""]},"fastapi_aad_auth._base.authenticators.session.SessionAuthenticator":{get_access_token:[8,2,1,""],get_access_token_from_request:[8,2,1,""],get_login_button:[8,2,1,""],get_user_from_request:[8,2,1,""],logout:[8,2,1,""],pop_post_auth_redirect:[8,2,1,""],process_login_callback:[8,2,1,""],process_login_request:[8,2,1,""],redirect_if_authenticated:[8,2,1,""],redirect_to_provider_login:[8,2,1,""],set_post_auth_redirect:[8,2,1,""]},"fastapi_aad_auth._base.backend":{BaseOAuthBackend:[9,1,1,""]},"fastapi_aad_auth._base.backend.BaseOAuthBackend":{api_auth_scheme:[9,2,1,""],authenticate:[9,2,1,""],check:[9,2,1,""],is_authenticated:[9,2,1,""],requires_auth:[9,2,1,""]},"fastapi_aad_auth._base.provider":{Provider:[10,1,1,""]},"fastapi_aad_auth._base.provider.Provider":{get_routes:[10,2,1,""],login_url:[10,2,1,""],logout:[10,2,1,""],redirect_url:[10,2,1,""]},"fastapi_aad_auth._base.state":{AuthenticationOptions:[11,1,1,""],AuthenticationState:[11,1,1,""],User:[11,1,1,""]},"fastapi_aad_auth._base.state.AuthenticationState":{as_unauthenticated:[11,2,1,""],authenticate_as:[11,2,1,""],authenticated_user:[11,2,1,""],check_session_state:[11,2,1,""],credentials:[11,2,1,""],is_authenticated:[11,2,1,""],load:[11,2,1,""],load_from_session:[11,2,1,""],logout:[11,2,1,""],save_to_session:[11,2,1,""],store:[11,2,1,""]},"fastapi_aad_auth._base.state.User":{permissions:[11,2,1,""]},"fastapi_aad_auth._base.validators":{base:[13,0,0,"-"],session:[14,0,0,"-"],token:[15,0,0,"-"]},"fastapi_aad_auth._base.validators.base":{Validator:[13,1,1,""]},"fastapi_aad_auth._base.validators.base.Validator":{check:[13,2,1,""]},"fastapi_aad_auth._base.validators.session":{SessionValidator:[14,1,1,""]},"fastapi_aad_auth._base.validators.session.SessionValidator":{check:[14,2,1,""],get_session_serializer:[14,2,1,""],get_state_from_session:[14,2,1,""],logout:[14,2,1,""],pop_post_auth_redirect:[14,2,1,""],set_post_auth_redirect:[14,2,1,""]},"fastapi_aad_auth._base.validators.token":{InitOAuth:[15,1,1,""],TokenValidator:[15,1,1,""]},"fastapi_aad_auth._base.validators.token.TokenValidator":{check:[15,2,1,""],get_token:[15,2,1,""],init_oauth:[15,2,1,""],validate_token:[15,2,1,""]},"fastapi_aad_auth.auth":{AADAuth:[16,1,1,""],Authenticator:[16,1,1,""]},"fastapi_aad_auth.auth.AADAuth":{api_auth_scheme:[16,2,1,""]},"fastapi_aad_auth.auth.Authenticator":{app_routes_add_auth:[16,2,1,""],auth_required:[16,2,1,""],configure_app:[16,2,1,""]},"fastapi_aad_auth.config":{AuthSessionConfig:[17,1,1,""],BaseSettings:[17,1,1,""],Config:[17,1,1,""],LoginUIConfig:[17,1,1,""],RoutingConfig:[17,1,1,""],SessionConfig:[17,1,1,""]},"fastapi_aad_auth.errors":{ConfigurationError:[18,3,1,""],base_error_handler:[18,4,1,""]},"fastapi_aad_auth.mixins":{logging:[20,0,0,"-"],not_authenticated:[21,0,0,"-"]},"fastapi_aad_auth.mixins.logging":{LoggingMixin:[20,1,1,""]},"fastapi_aad_auth.mixins.logging.LoggingMixin":{logger:[20,2,1,""]},"fastapi_aad_auth.mixins.not_authenticated":{NotAuthenticatedMixin:[21,1,1,""]},"fastapi_aad_auth.mixins.not_authenticated.NotAuthenticatedMixin":{not_authenticated:[21,2,1,""]},"fastapi_aad_auth.oauth":{aad:[23,0,0,"-"],state:[24,0,0,"-"]},"fastapi_aad_auth.oauth.aad":{AADOAuthBackend:[23,1,1,""]},"fastapi_aad_auth.oauth.aad.AADOAuthBackend":{from_config:[23,2,1,""]},"fastapi_aad_auth.oauth.state":{AuthenticationState:[24,1,1,""],User:[24,1,1,""]},"fastapi_aad_auth.providers":{aad:[26,0,0,"-"]},"fastapi_aad_auth.providers.aad":{AADConfig:[26,1,1,""],AADProvider:[26,1,1,""],AADSessionAuthenticator:[26,1,1,""],AADTokenValidator:[26,1,1,""],BaseSettings:[26,1,1,""]},"fastapi_aad_auth.providers.aad.AADProvider":{from_config:[26,2,1,""],get_login_button:[26,2,1,""]},"fastapi_aad_auth.providers.aad.AADSessionAuthenticator":{get_access_token:[26,2,1,""]},"fastapi_aad_auth.ui":{UI:[27,1,1,""],jinja:[30,0,0,"-"]},"fastapi_aad_auth.ui.UI":{routes:[27,2,1,""]},"fastapi_aad_auth.ui.jinja":{Jinja2Templates:[30,1,1,""],PkgResourcesTemplateLoader:[30,1,1,""]},"fastapi_aad_auth.ui.jinja.Jinja2Templates":{get_env:[30,2,1,""]},"fastapi_aad_auth.ui.jinja.PkgResourcesTemplateLoader":{get_source:[30,2,1,""]},"fastapi_aad_auth.utilities":{bool_from_env:[33,4,1,""],expand_doc:[33,4,1,""],klass_from_str:[33,4,1,""],list_from_env:[33,4,1,""],logging:[34,0,0,"-"],urls:[35,0,0,"-"]},"fastapi_aad_auth.utilities.urls":{append:[35,4,1,""],with_redirect:[35,4,1,""]},fastapi_aad_auth:{_base:[6,0,0,"-"],auth:[16,0,0,"-"],config:[17,0,0,"-"],errors:[18,0,0,"-"],mixins:[19,0,0,"-"],oauth:[22,0,0,"-"],providers:[25,0,0,"-"],ui:[27,0,0,"-"],utilities:[33,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:exception","4":"py:function"},terms:{"0353c0ca441f":17,"100":31,"2020":1,"25659":1,"2b44":17,"3b2f1ada":17,"46c6":17,"4e07":17,"4e3f":17,"500":18,"7cfa03569db6":17,"8000":36,"86400":[2,17],"8859":[0,28],"954a":17,"9904acc3":17,"abstract":13,"boolean":[1,3,23,26,33],"case":[4,17],"class":[0,1,2,8,9,10,11,13,14,15,16,17,20,21,23,24,26,27,29,30,31,32,33,36],"default":[0,1,2,16,17,26,36],"function":32,"import":[0,2,17,33,36],"int":[2,17],"new":[2,11,15,17,24,32,36],"public":[0,36],"return":[0,2,17,27,30,36],"static":[0,2,14,17,27,28,30],"super":32,"switch":16,"true":[0,2,9,10,15,16,17,26,32,36],"var":32,Added:1,Adding:1,And:0,For:36,IDs:[2,16,26,27],PRs:[1,4],Such:4,The:[0,2,4,5,11,16,17,23,26,27,36],There:[0,17,36],These:[0,36],Use:36,Used:16,__init__:[0,36],_author:36,_base:[1,2,3,5,17,24,26],_scope:36,a151:17,aad:[1,2,3,16,17,22,25,27,36],aad_api_audi:[2,26],aad_client_app_id:[2,26],aad_client_id:[2,26,36],aad_client_secret:[2,26,36],aad_domain_hint:[2,26],aad_prompt:[2,26],aad_redirect_uri:[2,26],aad_rol:[2,26],aad_strict_claim_check:[2,26],aad_tenant_id:[2,26,36],aadauth:[1,3,16,36],aadconfig:[17,26],aaddevicecodetokenrequest:36,aadoauthbackend:[1,2,3,17,23,26],aadprovid:[1,3,23,26],aadsessionauthent:26,aadtokenvalid:26,about:4,accept:[2,23,26],access:[1,2,8,17,26,27,36],access_token:[32,36],acquir:36,acquire_token_by_device_flow:36,across:[4,17],act:4,action:[1,4],activ:[1,3,4,5,23,26,32],add:[0,1,5,16,20,21,27,36],add_error_handl:16,add_to_base_rout:[0,16],added:0,adding:[16,36],addit:[2,4,17,23,26],addition:[0,4],advanc:5,against:[4,11,36],age:[2,17],ajax:[0,28,32],all:[0,2,4,26],allow:[0,2,16,17,36],allow_sess:[0,1,3,9,36],along:36,also:[0,4,17,26,27,36],altern:36,ani:[0,2,4,8,16,17,27],anoth:36,api:[0,1,2,4,5,9,16,23,26,36],api_audi:[2,15,23,26],api_auth_schem:[1,3,9,16,36],apirout:36,app:[1,2,3,4,16,23,26],app_home_rout:[2,17],app_nam:[0,2,17,28],app_routes_add_auth:16,append:35,appid:36,applic:[0,2,16,17,18,26,27,32,36],appnam:[29,31,32],approach:[0,1,36],appropri:4,arg:[8,11,13,14,16,17,20,23,26,35],argument:[0,11,15,16,17,24,26,27],aria:32,as_unauthent:11,associ:[0,5],async:[0,9,36],attribut:0,audienc:[23,26],auth:[0,1,3,23,26,27],auth_backend:[0,16,36],auth_provid:[0,36],auth_requir:[16,36],auth_sess:[2,17],auth_stat:[0,8,36],authent:[0,1,2,3,4,5,6,9,10,11,14,15,16,17,21,23,24,26,27],authenticate_a:11,authenticated_us:11,authenticationopt:11,authenticationst:[0,1,3,9,11,13,24,36],author:36,authorizationurl:15,authsessionconfig:17,auto:[31,32],auto_error:[15,26],autodoc:33,autom:1,automat:[0,4,36],avail:[0,4],avoid:4,azur:[0,1,3,4,5,23,26],b782:17,backend:[1,2,3,6,23,26],base:[0,1,2,3,8,9,10,12,14,15,16,17,20,26,27,29,31,32,36],base_context:[0,16,27],base_error_handl:18,base_url:35,baseoauthbackend:[1,3,9],baseset:[17,26],basic:[0,5],bb5d:17,bearer:[0,32,36],behalf:36,behaviour:[0,2,8,17,36],being:36,below:4,between:16,blank:4,block:[0,1,16,28,29,31,32],bodi:[0,28,29],bodyscript:[0,28,32],bool:[0,2,9,10,15,16,17,26],bool_from_env:33,bootstrap:[0,28,32],both:5,branch:4,broken:4,browser:36,btn:32,bug:1,built:[0,4],bump:1,button:[8,26,32],cach:0,call:[0,2,17,36],callback:[8,23,26,36],can:[0,2,4,16,17,26,36],cannot:[11,15,24],card:29,caus:4,cb0de3b1:17,center:[31,32],certif:36,cfg:1,chang:[4,5],changelog:1,charset:[0,28],check:[0,2,4,9,11,13,14,15,26],check_session_st:11,claim:[2,26],classlist:32,classmethod:[11,23,26],classnam:32,cleanup:4,clear:[8,11,14],click:32,client:[1,2,23,26],client_app_id:[2,23,26],client_id:[2,15,23,26,36],client_secret:[2,23,26],clientid:15,clone:4,close:1,code:[4,29],codebas:4,col:32,collat:4,column:[31,32],com:[0,4,28,36],command:36,comment:4,compat:[0,28],complet:17,compon:[0,2,4,16,17,27],config:[0,1,2,3,5,15,16,23,26,27,36],configur:[0,1,3,5,16,17,23,26,27],configurationerror:18,configure_app:[16,36],connect:[2,17,23,26],consid:4,consist:4,consol:[32,36],contain:[4,11,17,29,31,32],content:[0,27,28,29,31,32],contentfoot:[29,31,32],contenthead:[29,31,32],contentsubhead:32,contentt:32,context:[0,2,16,17,18],contribut:[4,5],control:32,convert:33,cooki:[2,17],copyright:[29,31,32],correspond:[2,26],cosmet:4,could:36,coupl:4,cover:[0,4,28,31,32],cpython:4,creat:[0,2,11,15,16,17,21,24,36],credenti:[11,36],cryptographi:1,css:[0,27,28,32],current:[0,32],currenttarget:32,cve:1,d7b0:17,daemon:36,data:[11,15,24,32],databas:0,date:32,dd61433723a0:17,decid:36,declar:[23,26],decod:11,decor:16,def:[0,36],defin:[2,36],depend:[0,1,4,9,18,36],deprec:[1,2,5,9,16,17,22,23,24,26],deprecat:26,describ:2,describedbi:32,descript:[4,27],desir:0,desktop:36,detail:[4,29],develop:36,devic:[0,28,36],dict:[0,2,15,16,17,26,27],differ:36,difficult:4,dir:[2,17],directli:4,directori:[1,3,4,5,17,23,26,30],directorypath:[2,17],disabl:0,display_nam:36,distribut:4,div:[29,31,32],djpugh:[1,4],doc:[0,4,15,16,17,36],docstr:1,doctyp:[0,28],document:[1,5,32,33,36],doing:4,domain:[2,23,26],domain_hint:[2,23,26],done:[0,32],drafter:1,duck:0,dump:36,dure:4,easier:1,easili:0,edg:[0,28],edit:1,elif:36,elig:36,ellipsi:26,els:[32,36],email:[4,11,24,32],empti:[2,17,36],enabl:[0,2,10,15,17,23,26,33,36],encod:[2,11,17],encoded_st:11,endblock:[0,28,29,31,32],endeavour:4,endif:[29,31,32],endpoint:[0,4,16,27],enforc:1,ensur:36,enter:36,env:[2,4,36],env_valu:33,environ:[0,2,4,17,26,30,33],epend:36,equiv:[0,28],err:36,error:[2,5,16,17,21,27],error_descript:29,error_messag:18,error_template_fil:[2,17],error_typ:[18,29],etc:[0,2,5,16,26],evalu:[23,26],exampl:[4,36],except:18,execut:4,expand:33,expand_doc:33,expect:26,expir:32,expires_in:32,explan:[29,31,32],expos:36,extend:[0,29,31,32],extens:[1,3,4],extern:16,face:4,facilit:4,factori:27,fail:[0,4,36],fall:4,fals:[8,9,15,16,26],fastapi:[4,9,16,17,23,26],fastapi_aad_auth:[1,2,3,4,5],fastapi_auth_en:[2,17],fastapi_auth_login_error_template_fil:[2,17],fastapi_auth_login_redirect_rout:[2,17],fastapi_auth_login_rout:[2,17],fastapi_auth_login_static_dir:[2,17],fastapi_auth_login_static_path:[2,17],fastapi_auth_login_template_fil:[2,17],fastapi_auth_login_ui_rout:[2,17],fastapi_auth_logout_rout:[2,17],fastapi_auth_post_logout_rout:[2,17],fastapi_auth_ui_klass:[2,17],fastapi_auth_user_klass:[2,17],fastapi_auth_user_rout:[2,17],fastapi_auth_user_template_fil:[2,17],fastapi_oauth_base_rout:[2,17],favicon:[0,28],featur:[1,4],field:[2,17,26],file:[0,1,2,4,17,36],filepath:[2,17],find:4,fine:17,first:4,fix:[1,4],flag:[1,3,23,26],flake8:4,flex:[31,32],flow:[4,36],flush:36,folder:4,follow:4,font:[27,31],footer:[0,28],forc:8,fork:1,form:[4,11,15,24,32],format:4,found:4,framework:4,from:[0,1,2,8,10,11,14,15,23,24,26,36],from_config:[23,26],full:[4,23,26,36],futur:1,gener:[0,1,36],get:[0,1,2,8,9,10,11,14,15,16,17,20,26,27,30,36],get_access_token:[8,26],get_access_token_from_request:8,get_env:30,get_login_button:[8,26],get_rout:10,get_sess:36,get_session_seri:14,get_sourc:30,get_state_from_sess:14,get_token:[15,36],get_user_from_request:8,getsecond:32,gettoken:0,git:4,github:[1,4,5],good:4,googleapi:[0,28],grei:29,group:[1,11,24,32],grow:4,guid:4,had:36,handl:[2,16,17,18,26,34],handler:[1,11,16,22,23,25,26],happen:4,has:[0,4,17,27],have:4,head:[0,28],header:[29,36],headscript:[0,28],hello:[0,4,36],hello_world:[0,36],help:4,helper:30,here:36,hidden:32,hint:[2,23,26],home:[2,4,17],home_path:[2,17],homepag:36,hostnam:36,how:[0,1,3,4,36],href:[0,28,32],html:[0,2,4,17,18,27,30,36],http:[0,2,4,17,28,36],https_onli:[2,17],httpurl:[2,26],icon:[0,28,32],ids:26,img:[0,28],improv:1,includ:[1,3,4,16,17,26,27],indent:36,independ:4,index:[4,5,30],individu:4,info:36,inform:[0,2,5,15,16,17,27],inherit:[0,1],init_oauth:15,initi:[0,1,2,17,28],initialis:[0,8,9,10,11,13,14,15,16,17,20,23,24,26,27,36],initiate_device_flow:36,initoauth:15,inner:[31,32],input:[11,15,24,32],instal:4,instead:4,integr:0,interact:[0,5,8,14,26,36],interest:4,interfac:0,intermitt:0,intern:16,interpret:4,invert:16,ipng:[0,28],is_authent:[9,11,36],isinst:36,iso:[0,28],issu:[1,4],itsdanger:[11,14],javascript:[0,28],jinja2:[0,2,17,30],jinja2templ:[0,30],jinja:[0,1,27],join:32,jqueri:[0,28],json:[0,16,18,29,36],justifi:[31,32],keep:4,kei:[0,16,32,36],keyword:[11,15,16,17,23,24,26,27],klass:33,klass_from_str:33,kwarg:[8,11,13,14,16,17,20,23,24,26,36],label:[1,32],land:[2,4,17],landing_path:[2,17],lang:[0,28],languag:[29,36],larg:4,last:[2,17],lax:[2,17],lead:[29,31,32],legal:4,lib:[0,17,28],licens:[4,5],like:36,limit:4,line:[4,36],link:[0,4,28,32],lint:[1,4],list:[2,9,10,11,16,17,23,24,26,33],list_from_env:33,load:[2,11,17,23,26,30],load_from_sess:11,loader:0,loadtoken:32,local:[4,36],localhost:36,log:[0,4,19,32,33],logger:[11,13,20,24],loggingmixin:[0,20],login:[0,2,8,10,16,17,26,27,36],login_path:[1,2,3,17,36],login_redirect_path:[1,2,3,17,36],login_ui:[2,17],login_url:10,loginuiconfig:[0,17],logo:[29,31,32],logout:[2,8,10,11,14,17],logout_path:[2,17],maco:4,made:4,mai:4,main:[29,31,32],maintain:4,mainten:1,make:4,manag:4,mani:[2,4],manifest:26,manual:[1,4],master:4,matrix:4,max_ag:[2,17],maximum:[2,17],meant:4,merg:4,messag:[27,29,36],meta:[0,28],method:[0,1,27],microsoft:36,microsoftonlin:36,middlewar:[2,9,16,17,36],min:[0,28],minimum:1,misconfigur:18,mit:[4,5],mixin:5,mode:[2,17],model:[11,15,24,33],modul:[1,6,7,12,19,22,25,27,33],more:[1,3,4],most:[4,17],mount:[2,17],msal:36,msal_appl:36,multi:[17,36],multipl:4,must:4,mute:[29,31,32],myuserclass:0,name:[0,2,11,16,17,20,24,28,32],nav:[0,28],need:[4,36],nest:2,network:[2,26],noauth_redirect:10,none:[0,2,11,15,16,17,18,24,26,27,35,36],noqa:4,normal:31,not_authent:19,notauthenticatedmixin:21,note:[0,36],now:36,oauth2:36,oauth:[1,2,3,5,10,15,17,25,26,36],oauth_base_rout:[1,2,3,10,17,26],oauthbackend:9,object:[0,2,8,11,17,19,20,23,26,27,36],off:4,onc:17,ongo:4,onli:[2,17],open:[4,5,32],openapi:[5,15,16,36],openid:36,option:[0,1,5,9,11,15,16,17,23,26,36],other:[0,36],output:4,overal:[2,17],overrid:0,overwrit:[2,26],packag:[0,17,30],page:[2,4,5,17,27,36],paramet:[11,16,17,26,35,36],pars:[11,15,24],part:[0,2,4,16,17,36],particular:4,patch:4,path:[1,2,17,26,33,35,36],perform:4,permiss:[4,11,32,36],persist:0,pipelin:4,pkce:36,pkg_resourc:30,pkgresourcestemplateload:30,place:0,plaintextrespons:36,platform:[4,36],pleas:[0,4,31],png:[0,28],pop_post_auth_redirect:[8,14],possibl:4,post:[2,8,14,17,23,26],post_logout_path:[2,17],post_redirect:[8,26,35],prepend:32,primarili:0,princip:1,print:[0,36],privat:36,problem:4,process:[0,2,4,8,14,17],process_login_callback:8,process_login_request:8,project:4,prompt:[2,23,26],properti:[9,10,11,15,16,20,21,27],provid:[0,1,2,3,4,5,6,8,15,16,17,21,23,27,30],provider_config:26,publicclientappl:36,pydant:[2,17,26,33],pypi:1,pytest:4,python:[4,36],qualiti:4,queri:35,rais:[11,15,24,36],rare:4,read:[2,26],readabl:4,readi:32,readonli:32,realli:[0,4],recent:0,recomend:36,recommend:4,redirect:[2,8,10,14,16,17,26,35,36],redirect_if_authent:8,redirect_path:26,redirect_to_provider_login:8,redirect_uri:[2,23,26],redirect_url:10,rediredt:36,redoc:[16,36],refactor:[1,3],refer:4,regist:36,registr:[1,2,3,4,23,26],rel:[0,28,32],relat:17,releas:[1,5],reli:36,remov:[1,4],render:0,renov:1,replac:[1,2,3,9,16,17,23,24,26,32,36],repositori:[4,5],request:[2,8,9,10,13,14,15,17,18,21,23,26,30,36],requir:[0,2,8,9,16,17,26,36],requires_auth:[0,1,3,9,16,36],reserv:4,resourc:[0,30],respons:[18,36],restructuredtext:4,result:[4,36],review:4,role:[1,2,11,24,26,29,32],root:17,rout:[0,1,2,10,16,17,27,36],route_list:16,router:[0,16,27,36],routingconfig:[1,3,17,36],row:32,rst:1,run:[2,26],safe:[29,31,32],sai:4,salt:[2,14,17],same:[0,4],same_sit:[2,17],sampl:36,save:11,save_to_sess:11,scale:[0,28],scenario:36,schema:[9,16],scheme_nam:[15,26],scope:[2,4,15,16,23,26,32,36],screen:[2,17],script:[0,28,32],search:5,secret:[2,11,14,17,23,26,36],secret_kei:[2,17],secretstr:[2,17,26],section:[2,4,36],see:[0,1,3,4,36],self:[0,4,36],separ:4,serial:[11,14,23,26],serv:36,server:[4,16,29,36],servic:[1,2,4,26],session:[0,2,7,9,10,11,12,16,17,23,26,36],session_auth_salt:[2,17],session_auth_secret:[2,17],session_cooki:[2,17],session_https_onli:[2,17],session_max_ag:[2,17],session_same_sit:[2,17],session_secret:[2,17],session_seri:[14,23,26],session_st:11,session_valid:[8,26],sessionauthent:[8,10],sessionconfig:17,sessionvalid:[14,26],set:[0,2,4,8,14,16,17,26,27,36],set_post_auth_redirect:[8,14],setsecond:32,setup:[0,1],sever:[4,36],shield:1,should:[0,4,17,36],show:[2,17,36],shown:[4,36],sign:[1,31],simpl:4,singl:[4,36],site:17,size:4,small:4,smaller:4,soderluk:1,some:36,sometim:4,sourc:[2,4,5,8,9,10,11,13,14,15,16,17,18,20,21,23,24,26,27,30,33,35],span:32,special:8,specif:[4,16,17],specifi:16,sphinx:4,sphinx_github_changelog:1,src:[0,28,36],starlett:[8,9,13,15,18,36],state:[0,1,2,3,6,9,13,15,16,17,22,26],static_directori:[2,17],static_path:[0,2,17,28,32],statu:4,status_cod:[18,29],stdout:36,step:1,store:11,str:[0,2,10,11,15,16,17,24,26,27,30,36],strict:[2,26],strict_token:[23,26],strictli:[23,26],string:[2,17,36],structur:[0,3],studi:4,style:4,stylesheet:[0,28,32],sub:[6,7,12,19,22,25,27,33],success:32,suit:4,summari:0,support:4,suppress:4,swagger:4,swagger_ui_init_oauth:36,sys:36,tab:36,tabl:32,take:0,target:[8,36],tbodi:32,templat:[0,1,2,17,18,27,30],template_fil:[2,17],template_path:18,templaterespons:30,tenant:[2,16,23,26,27,36],tenant_id:[2,23,26,36],termin:36,test:[0,36],testapp:0,text:[0,4,28,29,31,32],thank:1,them:[0,4],theme:1,thi:[0,1,2,4,16,17,23,26,32,36],through:[0,4],tightli:4,titl:[0,28,29,32],togeth:35,toggl:[16,32],toisostr:32,token:[1,2,8,9,12,23,26,27,32,36],token_api_path:32,token_valid:[8,26],tokentext:32,tokenurl:15,tokenvalid:15,tool:[4,36],toolmantim:1,tostr:32,toward:3,tox:[4,17],tracker:4,treat:[2,4,17],trigger:1,two:0,type:[0,2,15,16,17,18,26,28,32],ubuntu:4,ui_klass:[0,2,17],unauthent:21,under:4,unrel:4,updat:[1,36],uri:[2,23,26,36],url:[8,10,16,33,36],url_saf:[11,14],urlsafeseri:[11,14],usag:[0,1,3,4,5],use:[1,2,4,9,16,17,19,23,26,36],use_pkc:[15,26],used:[0,2,4,16,17,26],usepkcewithauthorizationcodegr:15,user:[1,2,8,11,15,16,17,23,24,26,27,36],user_cod:36,user_klass:[0,1,2,15,16,17,23,26],user_path:[0,2,17,27],user_template_fil:[2,17],usernam:[11,24,32],uses:[0,4],using:[0,2,4,16,36],utf:[0,28],util:5,uuid4:2,uuid:2,val:32,valid:[0,1,2,6,9,10,11,17,24,26,32],validate_token:15,validationerror:[11,15,24],valu:[2,11,17,23,26,32,33],valueerror:36,variabl:[0,2,17,26,33,36],variou:4,veri:4,version:[2,4,9,16,17,22,23,24,26,36],via:[30,36],view:[2,4,17,27],viewport:[0,28],volunt:4,want:36,warn:4,wasn:36,web:[4,36],weight:31,welcom:4,well:[16,17,27],what:4,whatev:36,when:[0,2,26,36],where:4,wherev:4,whether:36,which:[0,4,27],whitespac:4,why:4,width:[0,28],window:4,wish:4,with_redirect:35,within:[0,2,4,17,36],without:36,wonder:1,work:[0,1,4],worker:17,workflow:4,world:[0,36],wrap:27,written:4,yml:4,you:[0,4,36],your:4,youu:36},titles:["Using fastapi_aad_auth","What's Changed","Configuration Options","API Deprecations","Development","fastapi-aad-auth","fastapi_aad_auth._base","fastapi_aad_auth._base.authenticators","fastapi_aad_auth._base.authenticators.session","fastapi_aad_auth._base.backend","fastapi_aad_auth._base.provider","fastapi_aad_auth._base.state","fastapi_aad_auth._base.validators","fastapi_aad_auth._base.validators.base","fastapi_aad_auth._base.validators.session","fastapi_aad_auth._base.validators.token","fastapi_aad_auth.auth","fastapi_aad_auth.config","fastapi_aad_auth.errors","fastapi_aad_auth.mixins","fastapi_aad_auth.mixins.logging","fastapi_aad_auth.mixins.not_authenticated","fastapi_aad_auth.oauth","fastapi_aad_auth.oauth.aad","fastapi_aad_auth.oauth.state","fastapi_aad_auth.providers","fastapi_aad_auth.providers.aad","fastapi_aad_auth.ui","fastapi_aad_auth.ui:base.html","fastapi_aad_auth.ui:error.html","fastapi_aad_auth.ui.jinja","fastapi_aad_auth.ui:login.html","fastapi_aad_auth.ui:user.html","fastapi_aad_auth.utilities","fastapi_aad_auth.utilities.logging","fastapi_aad_auth.utilities.urls","Using fastapi_aad_auth"],titleterms:{Using:[0,36],_base:[6,7,8,9,10,11,12,13,14,15],aad:[5,23,26],access:0,activ:36,api:3,app:36,auth:[5,16],authent:[7,8,36],autom:4,azur:36,backend:9,base:[13,28],build:4,chang:1,client:36,code:36,compat:4,config:17,configur:[2,4,36],customis:0,deprec:3,develop:4,directori:36,document:4,environ:36,error:[18,29],fastapi:[5,36],fastapi_aad_auth:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],get:4,html:[28,29,31,32],includ:36,integr:4,jinja:30,linter:4,log:[20,34],login:31,mixin:[19,20,21],model:0,not_authent:21,oauth:[22,23,24],option:2,postman:36,provid:[10,25,26],pull:4,registr:36,releas:4,request:4,requir:4,run:4,session:[8,14],setup:4,start:4,state:[11,24],submit:4,test:4,testapp:4,token:[0,15],url:35,user:[0,32],util:[33,34,35],valid:[12,13,14,15],view:0,what:1,your:36}})