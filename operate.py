
def getResult(r) :
    if r==0:
        g = "Control" 
        b = "Stimulated to Learn" 
        t = "Memantine" 
        c = "c-CS-m"
    elif r==1:
        g = "Control" 
        b = "Stimulated to Learn" 
        t = "Saline" 
        c = "c-CS-s"
    elif r==2:
        g = "Control" 
        b = "Not Stimulated to Learn" 
        t = "Memantine" 
        c = "c-SC-m"
    elif r==3:
        g = "Control" 
        b = "Not Stimulated to Learn"
        t = "Saline"
        c = "c-SC-s"
    elif r==4:
        g = "Trisomy" 
        b = "Stimulated to Learn" 
        t = "Memantine" 
        c = "t-CS-m"   
    elif r==5:
        g = "Trisomy" 
        b = "Stimulated to Learn" 
        t = "Saline" 
        c = "t-CS-s"
    elif r==6:
        g = "Trisomy" 
        b = "Not Stimulated to Learn" 
        t = "Memantine" 
        c = "t-SC-m"
    elif r==7:
        g = "Trisomy" 
        b = "Not Stimulated to Learn" 
        t = "Saline" 
        c = "t-SC-s"
    
    return [g,b,t,c]

